+++
title = "Personal Network Braindump"
date = "2025-10-09"
+++

We strive for a human-centric, personal network with
interactions between humans. No consistent view of things
required, and no central server.

<!-- more -->

Your personal data should be strongly attached to a
service and easy to move between server.

It should be fun to hack and tinker with the network. If you
want to write The Capybara Network, you only need to fill
out some logic code, then everyone in the network should be
able to use your library to integrate into their pods.

## Periphery

The periphery server fulfills three functions. It executes
pods, ensures that identity of people and capabilities are
distributed through the network and forwards messages from
outboxes to other periphery inboxes.

The communication between periphery server happen
unencrypted. Either the messages are signed by the person
(for example issuing a keypair on behalf of someone) _or_
message payloads are already encrypted with publicly
available keys.

The periphery server has a friends server list, to which we
publish changes in provided capabilities. If the current
server hosts no pod of an identity, only the `hey` pod is
referenced.

Furthermore, it allows easy migration of pods between
server, such that no interruption is in the processing of
incoming messages found.

Move to identity note:

> The main communication tool centers around protocols defined
> by pairs of identifiers and capabilities. Every identity of
> a person is unique, same as every capability is unique.
> 
> To distinguish several pods offering the same capabilities
> (for example git social features), we also introduce a third
> element which is the associated name. This triple has to be
> unique.


***relation to microkernel*** In function the approach can
be compared to microkernels, where the periphery (there
supervisor) executes several servers in user-mode and
ensures the communication between them.

## Identity and Behalfs

Every person in the network is strongly identified by their
public key fingerprint. It also acts as a token for
discovering capabilities a person supports. (for example
leaving a message)

The setup mostly follows GnuPG. We store a keypair on the
personal computer and issue certificates for pods
distributed in the periphery. The personal public key is
distributed to all servers, together with the signatures of
the tuple (pod endpoint, public key).

When moving the pod to a different server, the keypair has
to be renewed with the new server endpoint signed. We also
advise adding a expiry time.

<img src="https://ssbc.github.io/scuttlebutt-protocol-guide/img/follow_graph.png" width=600 />

## Of Boxes

Pods internal logic orchestrate communication flow between
people and can issue one-to-many communication (for example
listing all Git pods of a person), multi-hop dependencies
(getting participants of a Git issue, then their mail 
addresses) and long-running multi-response messages
(subscription or paging of long messages).

The periphery abstracts the task of [transporting](53jq18) messages from 
home to recipients server. Similar to the ActivityPub
protocol, this happens with concepts of boxes. Every pod has
a pair of inbox and outbox. The periphery distributes
incoming messages to matching inboxes and forwards messages
lying in outboxes to the matching server.

***lifecycle of communication*** Putting a message into the
outbox has the following signature
> (Vec<Recipient>, Capability, Payload) -> ResponseToken.

The periphery normalizes the list of recipients and matches
the capability fingerprint with available servers. It then
encrypts the message with public keys of all recipients. It
also appends the response token for the other periphery
server to use in their response.

The receiving server matches the message, puts it into the
inbox of the corresponding pod which then processes the
message and generates one (or many) responses with the
response token attached. The other server then forwards
messages again to the home server in the same way.

![Boxes](https://www.w3.org/TR/activitypub/illustration/tutorial-2.png)

## Necessity of async execution within pods

Some routines can be modeled with sync execution only, such
as asking for CLI commands, setting up virtual file system
with FUSE. Others, on the other hand, benefit immensely from
being able to write execution logic in asynchronous way. A
prominent example are TUIs fetching and displaying data from
external sources.

The WASM model currently allows declaring functions as async
in ***wasmtime***, which processes all functional calls as
non-blocking. On the other hand, ***wstd*** brings a full
async executor into the WASM application, which supports the
WASIp2 standard. 

To communicate with other pods, messages are put into
mailboxes of the federation server and forwarded to
individual pods, which are then answering their calls. 

To schedule correct order of execution with dependencies
spanning multiple pods, asnychronous execution is essential.
For example, to get a photo made with a friends, we can
imagine the following dependencies:
> fetch friends -> filter by name -> get photo at friend's pod
 
## Capability Fingerprint

The system organizes around capabilities, describing
abilities of a connected identifier. They are unique and
strongly attached to the supporting API.

When posting a message into the ***outbox*** of the
periphery, the message contains a recipients field together
with the capability fingerprint. (and maybe a name to
distinguish multiple instances)

The periphery resolves the server of recipients and
negotiate the proper calling convention with their server.
Once, both match (user and protocol) the message is
forwarded to the ***inbox*** of all recipients.

This makes interfaces ***immutable*** and only appendable
with new sets of interfaces, which may supersede old ones.

Pods with proper subsets of protocols may still use those
partials to communicate with supersets. But missing
functionality cannot be replaced for and should return an
missing implementation error.

## Abstracting Capabilities Away

Pods are human-centric. A developer should just be able 
to write a list of supported functions and the library
should fill in all the remaining bits.

This includes
 - generating functions the sender side can use to create a
   message and wait for the response
 - creating a structure for arguments and response, which is
   serializable
 - generate a unique capability fingerprint, representing
   the API

Rust proc-macro system is capable of all. We can sketch the
following:

```rust
struct GitRepo {
    issues: Vec<Issue>,
    prs: Vec<PR>,
}

#[capability]
impl GitRepo {
    fn add_issue(&mut self, sender: Person, issue: Issue) -> Future<()> {
        // check sender has the access rights for adding an issue
        // this may call to the home server
        self.check_access(&sender).await?;
        self.issues.push(issue);

        Ok(())
    }
}
```

What are examples of crates doing this?

## Human Interacting with Pods

For now, we have only described how pods are defined and
how they interact with each other. To also have human
interactions, pods need to define human interfaces.

For simplicity, we initially only support text interfaces
and everything-is-a-file paradigm. Both are communicated
with the SSH protocol to reduce periphery complexity. 

From the pod perspective, we define a function when someone
logs into SSH and render a TUI with given stdout/stdin. For
file support via SFTP, we have open/read/write/readdir to
render a view of the current pod state into a virtual
filesystem.

At the user side we can connect via ssh or sshfs to both and
can identify with a special token signed with the person
private key. The periphery hosts the actual SSH server and
multiplexes calls to the individual pods.

## Imaginable ways to render views

The following ways are possible for rendering the content of
a pod for different consumption

- offer editable file system via FUSE
  - add a WASI interface to register a set of files
  - present the content of a pod formated via files
  - trigger mutation events when files are saved
- SSH server for TUI interface
  - connect to builtin TUI interface via SSH client
  - provide modal interface to modify and view content
  - take inspiration from https://github.com/Eugeny/russh/blob/main/russh/examples/ratatui_app.rs
  - create WASI interface which binds an SSH server to a
    port and provides a write/read methods which are called
    upon changes
- CLI interface from supervisor
  - use allow-external from clap https://docs.rs/clap/latest/clap/struct.Command.html#method.allow_external_subcommands
    to dispatch commands to pods

## Dealing with files and streams

Boxes are for messaging only. To transmit larger files (for
examples images) or have streaming support (one could
imagine audio chats), we support a special direct
communication approach.

The periphery supports a stateful bidirectional connection
with token identifier. The tokens form a flat hierarchy
without any hash, names or groups, and can be used to read
from and write to.
## Ideas for Pods

Some random ideas what patterns could fit into pods

 - ***Hey Pod*** Represent trusted people fingerprints

    Build a web of trusted people by signing their public
    keys. Add small messages to their personal spaces,
    similar to friend books.

 - ***Git Pod*** Augment Git with additional social features

    Bundle Git repository with pod WASM file and offer
    capabilities for submitting patches, creating issues and
    hosting small wikis

 - ***Book Sharing Pod*** Comment books and share them

    Ask for books and send them to your friends via DHL
    Packstation

 - ***Language Pod*** 
 - ***Podcast Pod***

## Examples of other federated protocols

***Scuttlebutt*** is a service for hosting distributed
social networks and ensuring that content disseminate
untampered through the network.

***AT Protocol*** supports the Bluesky service and allows
separation of user data from indexing.

***ActivityPub*** is the default model for many federated
service with the largest provider, Mastodon.

***Aether*** provides many-to-many communication in a
distributed manner.

## Minimal viable product

A minimal useable prototype of a pod system contains the
following abilities:
 - storing some state which can be restored after a session
 - allowing interaction with CLI
 - some editing with files

Build web-of-trust with OpenPGP and simple leave a message
for a friend function.

## What we do not want to do

Create a blockchain-like structure with immutable,
append-only, data using something like a Merkle tree.

