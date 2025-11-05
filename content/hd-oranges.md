+++
title = "Oranges in Many Dimensions"
date = "2025-03-29"
+++

<p>
Peeling    oranges    in
high                                                                               dimensionality
<math display="inline" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>k</mi> <mo class="MathClass-rel">≫</mo> <mn>3</mn></mrow></math>
is hard. This post discusses a fundamental phenomenon in asymptotic geometry
and explains at which rate you should peel an orange.
</p>

<!-- more -->

<p class="indent">   Suppose we have a special branch of hyper-orange existing in <math xmlns="http://www.w3.org/1998/Math/MathML" display="inline"><mrow><mi>d</mi> <mo class="MathClass-rel">≥</mo> <mn>1</mn></mrow></math>
and we would like to peel such that <math display="inline" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>95</mn><mi>%</mi></mrow></math>
of pulp is preserved. We will denote the volume of an <math display="inline" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msup><mrow><mi>L</mi></mrow><mrow><mi>p</mi></mrow></msup></mrow></math>
norm in <math xmlns="http://www.w3.org/1998/Math/MathML" display="inline"><mrow><mi>d</mi></mrow></math>
dimensions, that is <math display="inline" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>C</mi> <mo class="MathClass-rel">=</mo> <mo class="MathClass-open" stretchy="false">{</mo><mi>x</mi> <mo class="MathClass-rel">∈</mo> <msup><mrow><mi>ℝ</mi></mrow><mrow><mi>d</mi></mrow></msup><mo class="MathClass-rel">∣</mo><msub><mrow> <mrow><mo fence="true" form="prefix"> ‖</mo><mrow><mi>x</mi></mrow><mo fence="true" form="postfix">‖</mo></mrow></mrow><mrow><mi>p</mi></mrow></msub> <mo class="MathClass-rel">≤</mo> <mi>r</mi><mo stretchy="false" class="MathClass-close">}</mo></mrow></math>,
as <math xmlns="http://www.w3.org/1998/Math/MathML" display="inline"><mrow><msub><mrow><mi class="qopname">V</mi><mo> ⁡ </mo></mrow><mrow><mi>C</mi></mrow></msub> <mo class="MathClass-rel">=</mo><msub><mrow><mi class="qopname"> V</mi><mo> ⁡ </mo></mrow><mrow><mi>p</mi><mo class="MathClass-punc">,</mo><mi>d</mi></mrow></msub></mrow></math>.
Because we first deal with balls we have <math xmlns="http://www.w3.org/1998/Math/MathML" display="inline"><mrow><mi>p</mi> <mo class="MathClass-rel">=</mo> <mn>2</mn></mrow></math>
and set by default <math xmlns="http://www.w3.org/1998/Math/MathML" display="inline"><mrow><msub><mrow><mi class="qopname">V</mi><mo> ⁡ </mo></mrow><mrow><mn>2</mn><mo class="MathClass-punc">,</mo><mi>d</mi></mrow></msub> <mo class="MathClass-rel">=</mo><msub><mrow><mi class="qopname"> V</mi><mo> ⁡ </mo></mrow><mrow><mi>d</mi></mrow></msub></mrow></math>.
</p><p class="indent">   We first look at ratios of volume of balls radii scaled by <math display="inline" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>φ</mi></mrow></math>
such that <math display="inline" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mrow><mi class="qopname">V</mi><mo> ⁡ </mo></mrow><mrow><mi>d</mi></mrow></msub><mo class="MathClass-open" stretchy="false">(</mo><mi mathvariant="italic">φr</mi><mo class="MathClass-close" stretchy="false">)</mo><mo class="MathClass-bin">∕</mo><msub><mrow><mi class="qopname">V</mi><mo> ⁡ </mo></mrow><mrow><mi>d</mi></mrow></msub><mo class="MathClass-open" stretchy="false">(</mo><mi>r</mi><mo stretchy="false" class="MathClass-close">)</mo> <mo class="MathClass-rel">=</mo> <mn>0</mn><mo class="MathClass-punc">.</mo><mn>95</mn></mrow></math>.
For <math display="inline" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>d</mi> <mo class="MathClass-rel">∈</mo><mo class="MathClass-open" stretchy="false">{</mo><mn>1</mn><mo class="MathClass-punc">,</mo><mn>2</mn><mo class="MathClass-punc">,</mo><mn>3</mn><mo stretchy="false" class="MathClass-close">}</mo></mrow></math>
we know from middle school that <math display="inline" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mrow><mi class="qopname">V</mi><mo> ⁡ </mo></mrow><mrow><mn>1</mn></mrow></msub><mo class="MathClass-open" stretchy="false">(</mo><mi>r</mi><mo class="MathClass-close" stretchy="false">)</mo> <mo class="MathClass-rel">=</mo> <mn>2</mn><mi>r</mi></mrow></math>,
<math display="inline" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mrow><mi class="qopname">V</mi><mo> ⁡ </mo></mrow><mrow><mn>2</mn></mrow></msub><mo stretchy="false" class="MathClass-open">(</mo><mi>r</mi><mo class="MathClass-close" stretchy="false">)</mo> <mo class="MathClass-rel">=</mo> <mi>π</mi><msup><mrow><mi>r</mi></mrow><mrow><mn>2</mn></mrow></msup></mrow></math>
and <math display="inline" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mrow><mi class="qopname">V</mi><mo> ⁡ </mo></mrow><mrow><mn>3</mn></mrow></msub><mo stretchy="false" class="MathClass-open">(</mo><mi>r</mi><mo stretchy="false" class="MathClass-close">)</mo> <mo class="MathClass-rel">=</mo> <mfrac><mrow><mn>4</mn></mrow> 
<mrow><mn>3</mn></mrow></mfrac><mi>π</mi><msup><mrow><mi>r</mi></mrow><mrow><mn>3</mn></mrow></msup></mrow></math>,
and hence <math display="inline" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mrow><mi>φ</mi></mrow><mrow><mn>1</mn><mo class="MathClass-punc">,</mo><mn>2</mn><mo class="MathClass-punc">,</mo><mn>3</mn></mrow></msub> <mo class="MathClass-rel">=</mo> <mroot><mrow><mn>0</mn><mo class="MathClass-punc">.</mo><mn>95</mn></mrow><mrow><mn>1</mn><mo class="MathClass-punc">,</mo><mn>2</mn><mo class="MathClass-punc">,</mo><mn>3</mn></mrow></mroot></mrow></math>.
For <math display="inline" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>d</mi> <mo class="MathClass-rel">&gt;</mo> <mn>3</mn></mrow></math>
we need some material from real analysis to work out the volume.
</p>

## Volume of n-ball Exponential Function  

<p> One proof works with
two observations: first scaling area identity <math xmlns="http://www.w3.org/1998/Math/MathML" display="inline"><mrow><msub><mrow><mi>A</mi></mrow><mrow><mi>n</mi><mo class="MathClass-bin">−</mo><mn>1</mn></mrow></msub><mo stretchy="false" class="MathClass-open">(</mo><mi>r</mi><mo stretchy="false" class="MathClass-close">)</mo> <mo class="MathClass-rel">=</mo> <msup><mrow><mi>r</mi></mrow><mrow><mi>n</mi><mo class="MathClass-bin">−</mo><mn>1</mn></mrow></msup><msub><mrow><mi>A</mi></mrow><mrow><mi>n</mi><mo class="MathClass-bin">−</mo><mn>1</mn></mrow></msub><mo class="MathClass-open" stretchy="false">(</mo><mn>1</mn><mo class="MathClass-close" stretchy="false">)</mo></mrow></math>
and evaluates the integral for rotational invariant function <math xmlns="http://www.w3.org/1998/Math/MathML" display="inline"><mrow><mi>f</mi><mo class="MathClass-open" stretchy="false">(</mo><msub><mrow><mi>x</mi></mrow><mrow><mn>1</mn></mrow></msub><mo class="MathClass-punc">,</mo><mi class="MathClass-op">…</mi><mo> ⁡</mo><mo class="MathClass-punc">,</mo><msub><mrow><mi>x</mi></mrow><mrow><mi>d</mi></mrow></msub><mo class="MathClass-close" stretchy="false">)</mo> <mo class="MathClass-rel">=</mo><mi class="qopname"> exp</mi><mo> ⁡ </mo><mo stretchy="false" class="MathClass-open">(</mo><mo class="MathClass-bin">−</mo><msubsup><mrow><mi>x</mi></mrow><mrow><mn>1</mn></mrow><mrow><mn>2</mn></mrow></msubsup><mo class="MathClass-rel">⋯</mo> <mo class="MathClass-bin">−</mo> <msubsup><mrow><mi>x</mi></mrow><mrow><mi>d</mi></mrow><mrow><mn>2</mn></mrow></msubsup><mo stretchy="false" class="MathClass-close">)</mo></mrow></math>.
</p><p class="indent">   On the one side, we have
</p><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mtable columnalign="left" class="align-star">
   <mtr><mtd class="align-odd" columnalign="right"><msub><mrow><mo>∫
 </mo></mrow><mrow><msup><mrow><mi>ℝ</mi></mrow><mrow><mi>d</mi></mrow></msup></mrow></msub><mi>f</mi><mo stretchy="false" class="MathClass-open">(</mo><msub><mrow><mi>x</mi></mrow><mrow><mn>1</mn></mrow></msub><mo class="MathClass-punc">,</mo><mo>…</mo><mo class="MathClass-punc">,</mo><msub><mrow><mi>x</mi></mrow><mrow><mi>d</mi></mrow></msub><mo class="MathClass-close" stretchy="false">)</mo><mstyle class="text"><mtext>d</mtext></mstyle><msub><mrow><mi>x</mi></mrow><mrow><mn>1</mn></mrow></msub><mo>…</mo><mstyle class="text"><mtext>d</mtext></mstyle><msub><mrow><mi>x</mi></mrow><mrow><mi>d</mi></mrow></msub> <mo class="MathClass-rel">=</mo><msub><mrow><mo> ∫
 </mo></mrow><mrow><mi>ℝ</mi></mrow></msub><mi class="qopname"> exp</mi><mo> ⁡ </mo><mo stretchy="false" class="MathClass-open">(</mo><mo class="MathClass-bin">−</mo><msubsup><mrow><mi>x</mi></mrow><mrow><mn>1</mn></mrow><mrow><mn>2</mn></mrow></msubsup><mo stretchy="false" class="MathClass-close">)</mo><mstyle class="text"><mtext>d</mtext></mstyle><msub><mrow><mi>x</mi></mrow><mrow>
<mn>1</mn></mrow></msub><mi class="qopname">…</mi><mo> ⁡ </mo><msub><mrow><mo>∫
 </mo></mrow><mrow><mi>ℝ</mi></mrow></msub><mi class="qopname"> exp</mi><mo> ⁡ </mo><mo stretchy="false" class="MathClass-open">(</mo><mo class="MathClass-bin">−</mo><msubsup><mrow><mi>x</mi></mrow><mrow><mi>d</mi></mrow><mrow><mn>2</mn></mrow></msubsup><mo stretchy="false" class="MathClass-close">)</mo><mstyle class="text"><mtext>d</mtext></mstyle><msub><mrow><mi>x</mi></mrow><mrow>
<mi>d</mi></mrow></msub> <mo class="MathClass-rel">=</mo> <msup><mrow><mi>π</mi></mrow><mrow><mi>d</mi><mo class="MathClass-bin">∕</mo><mn>2</mn></mrow></msup></mtd>   <mtd class="align-even"><mspace width="2em"></mspace></mtd>   <mtd columnalign="right" class="align-label">
   </mtd></mtr></mtable></math>
<p class="noindent">On the other side, isolating one variable and applying the area identity
</p><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mtable class="align-star" columnalign="left">
 <mtr><mtd class="align-odd" columnalign="right"><msub><mrow><mo>∫
 </mo></mrow><mrow><msup><mrow><mi>ℝ</mi></mrow><mrow><mi>d</mi></mrow></msup></mrow></msub><mi>f</mi><mo class="MathClass-open" stretchy="false">(</mo><msub><mrow><mi>x</mi></mrow><mrow><mn>1</mn></mrow></msub><mo class="MathClass-punc">,</mo><mo>…</mo><mo class="MathClass-punc">,</mo><msub><mrow><mi>x</mi></mrow><mrow><mi>d</mi></mrow></msub><mo stretchy="false" class="MathClass-close">)</mo><mstyle class="text"><mtext>d</mtext></mstyle><msub><mrow><mi>x</mi></mrow><mrow><mn>1</mn></mrow></msub><mo>…</mo><mstyle class="text"><mtext>d</mtext></mstyle><msub><mrow><mi>x</mi></mrow><mrow><mi>d</mi></mrow></msub></mtd> <mtd class="align-even"> <mo class="MathClass-rel">=</mo><msubsup><mrow><mo> ∫
 </mo></mrow><mrow><mn>0</mn></mrow><mrow><mi>∞</mi></mrow></msubsup><msub><mrow><mo>∫
 </mo></mrow><mrow><msup><mrow><mi>S</mi></mrow><mrow><mi>n</mi><mo class="MathClass-bin">−</mo><mn>1</mn></mrow></msup><mo stretchy="false" class="MathClass-open">(</mo><mi>r</mi><mo class="MathClass-close" stretchy="false">)</mo></mrow></msub><mi class="qopname"> exp</mi><mo> ⁡ </mo><mo class="MathClass-open" stretchy="false">(</mo><mo class="MathClass-bin">−</mo><msup><mrow><mi>r</mi></mrow><mrow><mn>2</mn></mrow></msup><mo stretchy="false" class="MathClass-close">)</mo><mstyle class="text"><mtext>d</mtext></mstyle><mi>A</mi><mstyle class="text"><mtext>d</mtext></mstyle><mi>r</mi><mspace width="2em"></mspace></mtd>                <mtd columnalign="right" class="align-label"></mtd> <mtd class="align-label">
 <mspace width="2em"></mspace></mtd></mtr><mtr><mtd class="align-odd" columnalign="right"></mtd>                     <mtd class="align-even"> <mo class="MathClass-rel">=</mo><msubsup><mrow><mo> ∫
 </mo></mrow><mrow><mn>0</mn></mrow><mrow><mi>∞</mi></mrow></msubsup><msub><mrow><mi>A</mi></mrow><mrow>
<mi>n</mi><mo class="MathClass-bin">−</mo><mn>1</mn></mrow></msub><mo class="MathClass-open" stretchy="false">(</mo><mn>1</mn><mo stretchy="false" class="MathClass-close">)</mo><msup><mrow><mi>r</mi></mrow><mrow><mi>d</mi><mo class="MathClass-bin">−</mo><mn>1</mn></mrow></msup><mi class="qopname"> exp</mi><mo> ⁡ </mo><mo class="MathClass-open" stretchy="false">(</mo><mo class="MathClass-bin">−</mo><msup><mrow><mi>r</mi></mrow><mrow><mn>2</mn></mrow></msup><mo class="MathClass-close" stretchy="false">)</mo><mstyle class="text"><mtext>d</mtext></mstyle><mi>r</mi><mspace width="2em"></mspace></mtd>                <mtd columnalign="right" class="align-label"></mtd> <mtd class="align-label">
 <mspace width="2em"></mspace></mtd></mtr><mtr><mtd class="align-odd" columnalign="right"></mtd>                     <mtd class="align-even"> <mo class="MathClass-rel">=</mo> <msub><mrow><mi>A</mi></mrow><mrow><mi>n</mi><mo class="MathClass-bin">−</mo><mn>1</mn></mrow></msub><mo class="MathClass-open" stretchy="false">(</mo><mn>1</mn><mo stretchy="false" class="MathClass-close">)</mo><msubsup><mrow><mo>∫
 </mo></mrow><mrow><mn>0</mn></mrow><mrow><mi>∞</mi></mrow></msubsup><mi class="qopname">exp</mi><mo> ⁡ </mo><mo stretchy="false" class="MathClass-open">(</mo><mo class="MathClass-bin">−</mo><msup><mrow><mi>r</mi></mrow><mrow><mn>2</mn></mrow></msup><mo class="MathClass-close" stretchy="false">)</mo><msup><mrow><mi>r</mi></mrow><mrow><mi>d</mi><mo class="MathClass-bin">−</mo><mn>1</mn></mrow></msup><mstyle class="text"><mtext>d</mtext></mstyle><mi>r</mi> <mo class="MathClass-rel">=</mo> <mfrac><mrow><mn>1</mn></mrow> 
<mrow><mn>2</mn></mrow></mfrac><msub><mrow><mi>A</mi></mrow><mrow><mi>n</mi><mo class="MathClass-bin">−</mo><mn>1</mn></mrow></msub><mo stretchy="false" class="MathClass-open">(</mo><mi>r</mi><mo class="MathClass-close" stretchy="false">)</mo><mi>Γ</mi><mo stretchy="false" class="MathClass-open">(</mo><mfrac><mrow><mi>d</mi></mrow>
<mrow><mn>2</mn></mrow></mfrac><mo stretchy="false" class="MathClass-close">)</mo><mo class="MathClass-punc">.</mo><mspace width="2em"></mspace></mtd> <mtd columnalign="right" class="align-label"></mtd> <mtd class="align-label">
   <mspace width="2em"></mspace></mtd></mtr></mtable></math>
                                                                  

                                                                  
<p class="noindent">Solving for the <math xmlns="http://www.w3.org/1998/Math/MathML" display="inline"><mrow><mi>d</mi> <mo class="MathClass-bin">−</mo> <mn>1</mn></mrow></math>
dimensional area we get <math xmlns="http://www.w3.org/1998/Math/MathML" display="inline"><mrow><msub><mrow><mi>A</mi></mrow><mrow><mi>d</mi><mo class="MathClass-bin">−</mo><mn>1</mn></mrow></msub><mo class="MathClass-open" stretchy="false">(</mo><mn>1</mn><mo stretchy="false" class="MathClass-close">)</mo> <mo class="MathClass-rel">=</mo>  <mfrac><mrow><mn>2</mn><msup><mrow><mi>π</mi></mrow><mrow><mi>d</mi><mo class="MathClass-bin">∕</mo><mn>2</mn></mrow></msup></mrow> 
<mrow><mi>Γ</mi><mo class="MathClass-open" stretchy="false">(</mo><mi>d</mi><mo class="MathClass-bin">∕</mo><mn>2</mn><mo stretchy="false" class="MathClass-close">)</mo></mrow></mfrac></mrow></math>
and substituting into the volume formula, we get the desired
<math display="inline" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mrow><mi class="qopname">V</mi><mo> ⁡ </mo></mrow><mrow><mi>d</mi></mrow></msub><mo class="MathClass-open" stretchy="false">(</mo><mi>R</mi><mo class="MathClass-close" stretchy="false">)</mo> <mo class="MathClass-rel">=</mo>  <mfrac><mrow><msup><mrow><mi>π</mi></mrow><mrow><mi>d</mi><mo class="MathClass-bin">∕</mo><mn>2</mn></mrow></msup><msup><mrow><mi>R</mi></mrow><mrow><mi>d</mi></mrow></msup></mrow> 
<mrow><mfrac><mrow><mi>d</mi></mrow>
<mrow><mn>2</mn></mrow></mfrac> <mi>Γ</mi><mo stretchy="false" class="MathClass-open">(</mo><mi>d</mi><mo class="MathClass-bin">∕</mo><mn>2</mn><mo class="MathClass-close" stretchy="false">)</mo></mrow></mfrac></mrow></math>.
</p>

## Consequence for Peeling Oranges

<p> Now consider the volume of two
balls <math display="inline" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mrow><mi class="qopname">V</mi><mo> ⁡ </mo></mrow><mrow><mi>d</mi></mrow></msub><mo class="MathClass-open" stretchy="false">(</mo><mn>1</mn><mo class="MathClass-close" stretchy="false">)</mo></mrow></math>,
<math xmlns="http://www.w3.org/1998/Math/MathML" display="inline"><mrow><msub><mrow><mi class="qopname">V</mi><mo> ⁡ </mo></mrow><mrow><mi>d</mi></mrow></msub><mo class="MathClass-open" stretchy="false">(</mo><mn>1</mn> <mo class="MathClass-bin">−</mo> <mi>𝜀</mi><mo class="MathClass-close" stretchy="false">)</mo></mrow></math> and
compare their volume
</p><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mtable class="align-star" columnalign="left">
                        <mtr><mtd class="align-odd" columnalign="right"><mrow><mfrac><mrow><msub><mrow><mi class="qopname">V</mi><mo> ⁡ </mo></mrow><mrow><mi>d</mi></mrow></msub><mo class="MathClass-open" stretchy="false">(</mo><mn>1</mn> <mo class="MathClass-bin">−</mo> <mi>𝜀</mi><mo class="MathClass-close" stretchy="false">)</mo></mrow>
   <mrow><msub><mrow><mi class="qopname">V</mi><mo> ⁡ </mo></mrow><mrow><mi>d</mi></mrow></msub><mo class="MathClass-open" stretchy="false">(</mo><mn>1</mn><mo stretchy="false" class="MathClass-close">)</mo></mrow></mfrac>    <mo class="MathClass-rel">=</mo> <msup><mrow><mo stretchy="false" class="MathClass-open">(</mo><mn>1</mn> <mo class="MathClass-bin">−</mo> <mi>𝜀</mi><mo class="MathClass-close" stretchy="false">)</mo></mrow><mrow><mi>d</mi></mrow></msup><mo class="MathClass-punc">.</mo></mrow></mtd>                        <mtd class="align-even"><mspace width="2em"></mspace></mtd>                        <mtd class="align-label" columnalign="right">
   </mtd></mtr></mtable></math>
<p class="noindent">Then, for every constant <math xmlns="http://www.w3.org/1998/Math/MathML" display="inline"><mrow><mi>𝜀</mi></mrow></math>
the ratio tends to zero, and we are left with no pulp at all! Realizing that for
<math display="inline" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>𝜀</mi> <mo class="MathClass-rel">∼</mo> <msup><mrow><mi>d</mi></mrow><mrow><mo class="MathClass-bin">−</mo><mn>1</mn></mrow></msup></mrow></math>, the
limit yields exponential function
</p><p class="indent">
</p><math display="block" xmlns="http://www.w3.org/1998/Math/MathML"><mtable class="align-star" columnalign="left">
            <mtr><mtd columnalign="right" class="align-odd"><mrow><mfrac><mrow><msub><mrow><mi class="qopname">V</mi><mo> ⁡ </mo></mrow><mrow><mi>d</mi></mrow></msub><mo stretchy="false" class="MathClass-open">(</mo><mn>1</mn> <mo class="MathClass-bin">−</mo> <mi>𝜀</mi><mo class="MathClass-close" stretchy="false">)</mo></mrow>
   <mrow><msub><mrow><mi class="qopname">V</mi><mo> ⁡ </mo></mrow><mrow><mi>d</mi></mrow></msub><mo stretchy="false" class="MathClass-open">(</mo><mn>1</mn><mo stretchy="false" class="MathClass-close">)</mo></mrow></mfrac>    <mo class="MathClass-rel">=</mo> <msup><mrow><mo stretchy="false" class="MathClass-open">(</mo><mn>1</mn> <mo class="MathClass-bin">−</mo><mfrac><mrow><mi>M</mi></mrow> 
 <mrow><mi>d</mi></mrow></mfrac> <mo class="MathClass-close" stretchy="false">)</mo></mrow><mrow><mi>d</mi></mrow></msup> <mo class="MathClass-rel">→</mo><mi class="qopname"> exp</mi><mo> ⁡ </mo><mo class="MathClass-open" stretchy="false">(</mo><mo class="MathClass-bin">−</mo><mi>M</mi><mo stretchy="false" class="MathClass-close">)</mo><mspace class="quad" width="1em"></mspace><mstyle class="text"><mtext>&nbsp;for&nbsp;</mtext></mstyle><mi>d</mi> <mo class="MathClass-rel">→</mo><mi>∞</mi><mo class="MathClass-punc">,</mo></mrow></mtd>            <mtd class="align-even"><mspace width="2em"></mspace></mtd>            <mtd class="align-label" columnalign="right">
   </mtd></mtr></mtable></math>
                                                                  

                                                                  
<p class="indent">   we should peel <math display="inline" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mo class="MathClass-open" stretchy="false">(</mo><mo class="MathClass-bin">−</mo><mi class="qopname">log</mi><mo> ⁡ </mo><mn>0</mn><mo class="MathClass-punc">.</mo><mn>95</mn><mo stretchy="false" class="MathClass-close">)</mo><mo class="MathClass-bin">∕</mo><mi>d</mi></mrow></math>
of the skin to get a fair share of pulp for high dimensions.
</p>

## Consequence for Approximating Norms  

<p>Let’s pack the
orange into a box. For simplicity we assume that the box has side length
<math display="inline" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>1</mn></mrow></math> and recognize
that an <math xmlns="http://www.w3.org/1998/Math/MathML" display="inline"><mrow><mi>d</mi></mrow></math>-cube
is described with the maximum norm. The volume of such a box is
<math display="inline" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mrow><mi class="qopname">V</mi><mo> ⁡ </mo></mrow><mrow><mi>∞</mi><mo class="MathClass-punc">,</mo><mi>d</mi></mrow></msub> <mo class="MathClass-rel">=</mo> <msup><mrow><mn>1</mn></mrow><mrow><mi>d</mi></mrow></msup> <mo class="MathClass-rel">=</mo> <mn>1</mn></mrow></math>, and
comparing that to the volume of our orange
</p><math display="block" xmlns="http://www.w3.org/1998/Math/MathML"><mtable columnalign="left" class="align-star">
                         <mtr><mtd columnalign="right" class="align-odd"><mrow> <mfrac><mrow><msub><mrow><mi class="qopname">V</mi><mo> ⁡ </mo></mrow><mrow><mn>2</mn><mo class="MathClass-punc">,</mo><mi>d</mi></mrow></msub></mrow>
<mrow><msub><mrow><mi class="qopname"> V</mi><mo> ⁡ </mo></mrow><mrow><mi>∞</mi><mo class="MathClass-punc">,</mo><mi>d</mi></mrow></msub></mrow></mfrac> <mo class="MathClass-rel">=</mo>    <mfrac><mrow><msup><mrow><mi>π</mi></mrow><mrow><mi>d</mi><mo class="MathClass-bin">∕</mo><mn>2</mn></mrow></msup></mrow> 
<mrow><mfrac><mrow><mi>d</mi></mrow>
<mrow><mn>2</mn></mrow></mfrac><mi>Γ</mi><mo stretchy="false" class="MathClass-open">(</mo><mi>d</mi><mo class="MathClass-bin">∕</mo><mn>2</mn><mo class="MathClass-close" stretchy="false">)</mo><mn>1</mn></mrow></mfrac></mrow></mtd>                         <mtd class="align-even"><mspace width="2em"></mspace></mtd>                         <mtd class="align-label" columnalign="right">
   </mtd></mtr></mtable></math>
<p class="noindent">Express this in log-space and use log-gamma approximation
<math display="inline" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi class="qopname">log</mi><mo> ⁡ </mo><mi>Γ</mi><mo stretchy="false" class="MathClass-open">(</mo><mi>z</mi><mo class="MathClass-close" stretchy="false">)</mo> <mo class="MathClass-rel">≈</mo> <mo stretchy="false" class="MathClass-open">(</mo><mi>z</mi> <mo class="MathClass-bin">−</mo><mfrac><mrow><mn>1</mn></mrow> 
<mrow><mn>2</mn></mrow></mfrac><mo class="MathClass-close" stretchy="false">)</mo><mi class="qopname">log</mi><mo> ⁡ </mo><mi>z</mi> <mo class="MathClass-bin">−</mo> <mi>z</mi> <mo class="MathClass-bin">+</mo> <mfrac><mrow><mn>1</mn></mrow> 
<mrow><mn>2</mn></mrow></mfrac><mi class="qopname"> log</mi><mo> ⁡ </mo><mo stretchy="false" class="MathClass-open">(</mo><mn>2</mn><mi>π</mi><mo stretchy="false" class="MathClass-close">)</mo></mrow></math>
                                                                  

                                                                  
</p><math display="block" xmlns="http://www.w3.org/1998/Math/MathML"><mtable class="align-star" columnalign="left">
                 <mtr><mtd columnalign="right" class="align-odd"><mrow><mi class="qopname">log</mi><mo> ⁡ </mo> <mfrac><mrow><msub><mrow><mi class="qopname">V</mi><mo> ⁡ </mo></mrow><mrow><mn>2</mn><mo class="MathClass-punc">,</mo><mi>d</mi></mrow></msub></mrow> 
<mrow><msub><mrow><mi class="qopname"> V</mi><mo> ⁡ </mo></mrow><mrow><mi>∞</mi><mo class="MathClass-punc">,</mo><mi>d</mi></mrow></msub></mrow></mfrac></mrow></mtd>                 <mtd class="align-even"><mrow> <mo class="MathClass-rel">=</mo> <mfrac><mrow><mi>d</mi></mrow> 
<mrow><mn>2</mn></mrow></mfrac><mi class="qopname">log</mi><mo> ⁡ </mo><mi>π</mi> <mo class="MathClass-bin">−</mo><mi class="qopname"> log</mi><mo> ⁡ </mo> <mfrac><mrow><mi>d</mi></mrow> 
<mrow><mn>2</mn></mrow></mfrac> <mo class="MathClass-bin">−</mo><mi class="qopname"> log</mi><mo> ⁡ </mo><mi>Γ</mi><mo stretchy="false" class="MathClass-open">(</mo><mfrac><mrow><mi>d</mi></mrow>
<mrow><mn>2</mn></mrow></mfrac><mo stretchy="false" class="MathClass-close">)</mo><mspace width="2em"></mspace></mrow></mtd>                 <mtd class="align-label" columnalign="right"></mtd>                 <mtd class="align-label"><mrow>
                 <mspace width="2em"></mspace></mrow></mtd></mtr><mtr><mtd columnalign="right" class="align-odd"></mtd>                          <mtd class="align-even"><mrow><mspace width="0.17em" class="thinspace"></mspace> <mo class="MathClass-rel">∼</mo> <mfrac><mrow><mi>d</mi></mrow> 
<mrow><mn>2</mn></mrow></mfrac><mi class="qopname">log</mi><mo> ⁡ </mo> <mfrac><mrow><mn>2</mn><mi mathvariant="italic">πe</mi></mrow> 
 <mrow><mi>d</mi></mrow></mfrac>  <mo class="MathClass-bin">−</mo><mfrac><mrow><mn>1</mn></mrow> 
<mrow><mn>2</mn></mrow></mfrac><mi class="qopname">log</mi><mo> ⁡ </mo><mn>2</mn><mi mathvariant="italic">πd</mi><mspace width="2em"></mspace></mrow></mtd>                     <mtd class="align-label" columnalign="right"></mtd>                 <mtd class="align-label"><mrow>
                 <mspace width="2em"></mspace></mrow></mtd></mtr><mtr><mtd class="align-odd" columnalign="right"></mtd>                          <mtd class="align-even"><mrow><mspace class="thinspace" width="0.17em"></mspace> <mo class="MathClass-rel">∼</mo> <mfrac><mrow><mi>d</mi></mrow> 
<mrow><mn>2</mn></mrow></mfrac><mi class="qopname">log</mi><mo> ⁡ </mo> <mfrac><mrow><mn>2</mn><mi mathvariant="italic">πe</mi></mrow> 
 <mrow><mi>d</mi></mrow></mfrac>  <mspace width="2em"></mspace></mrow></mtd>                               <mtd columnalign="right" class="align-label"></mtd>                 <mtd class="align-label"><mrow>
   <mspace width="2em"></mspace></mrow></mtd></mtr></mtable></math>
<p class="noindent">which turns negative once <math display="inline" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>d</mi> <mo class="MathClass-rel">&gt;</mo> <mn>2</mn><mi mathvariant="italic">πe</mi></mrow></math>
and grows linear in the dimensionality. Hence, the fraction diminishes exponentially fast. That
means for large <math xmlns="http://www.w3.org/1998/Math/MathML" display="inline"><mrow><mi>d</mi></mrow></math>
we can pack exponential many oranges into a single box!</p>
