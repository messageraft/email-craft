import{_ as o,o as e,c as p,k as s,a as l,t as n,Q as t}from"./chunks/framework.7fda9092.js";const v=JSON.parse('{"title":"Row","description":"Separates content boundaries horizontally","frontmatter":{"title":"Row","description":"Separates content boundaries horizontally","slug":"row","type":"component","head":[["meta",{"name":"og:description","content":"Separates content boundaries horizontally"}],["meta",{"name":"og:image","content":"https://emailcraft.dev/og.png"}],["meta",{"name":"og:site_name","content":"Email Craft"}],["meta",{"name":"og:title","content":"Row"}],["meta",{"name":"og:type","content":"website"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:description","content":"Separates content boundaries horizontally"}],["meta",{"name":"twitter:image","content":"https://emailcraft.dev/og.png"}],["meta",{"name":"twitter:title","content":"Row"}]]},"headers":[],"relativePath":"../../../docs/components/row.md","filePath":"../../../docs/components/row.md"}'),c={name:"../../../docs/components/row.md"},r={id:"frontmatter-title",tabindex:"-1"},i=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),y=s("h2",{id:"install",tabindex:"-1"},[l("Install "),s("a",{class:"header-anchor",href:"#install","aria-label":'Permalink to "Install"'},"​")],-1),d=t(`<div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-lmWTu" id="tab-CAg9xFQ" checked="checked"><label for="tab-CAg9xFQ">pnpm</label><input type="radio" name="group-lmWTu" id="tab-w5ahRbN"><label for="tab-w5ahRbN">bun</label><input type="radio" name="group-lmWTu" id="tab-YxlgqJq"><label for="tab-YxlgqJq">npm</label><input type="radio" name="group-lmWTu" id="tab-aOiLiss"><label for="tab-aOiLiss">yarn</label></div><div class="blocks"><div class="language-console vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">console</span><pre class="shiki slack-dark vp-code-dark"><code><span class="line"><span style="color:#E6E6E6;">pnpm install email-craft</span></span></code></pre><pre class="shiki slack-ochin vp-code-light"><code><span class="line"><span style="color:#002339;">pnpm install email-craft</span></span></code></pre></div><div class="language-console vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">console</span><pre class="shiki slack-dark vp-code-dark"><code><span class="line"><span style="color:#E6E6E6;">bun install email-craft</span></span></code></pre><pre class="shiki slack-ochin vp-code-light"><code><span class="line"><span style="color:#002339;">bun install email-craft</span></span></code></pre></div><div class="language-console vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">console</span><pre class="shiki slack-dark vp-code-dark"><code><span class="line"><span style="color:#E6E6E6;">npm install email-craft</span></span></code></pre><pre class="shiki slack-ochin vp-code-light"><code><span class="line"><span style="color:#002339;">npm install email-craft</span></span></code></pre></div><div class="language-console vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">console</span><pre class="shiki slack-dark vp-code-dark"><code><span class="line"><span style="color:#E6E6E6;">yarn install email-craft</span></span></code></pre><pre class="shiki slack-ochin vp-code-light"><code><span class="line"><span style="color:#002339;">yarn install email-craft</span></span></code></pre></div></div></div><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><p>Add the component to your email template. Include styles where needed.</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki slack-dark vp-code-dark"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#E6E6E6;"> { </span><span style="color:#9CDCFE;">Column</span><span style="color:#E6E6E6;">, </span><span style="color:#9CDCFE;">Row</span><span style="color:#E6E6E6;">, </span><span style="color:#9CDCFE;">Section</span><span style="color:#E6E6E6;"> } </span><span style="color:#C586C0;">from</span><span style="color:#E6E6E6;"> </span><span style="color:#CE9178;">&#39;email-craft&#39;</span><span style="color:#E6E6E6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#E6E6E6;"> </span><span style="color:#DCDCAA;">Email</span><span style="color:#E6E6E6;"> </span><span style="color:#D4D4D4;">=</span><span style="color:#E6E6E6;"> () </span><span style="color:#569CD6;">=&gt;</span><span style="color:#E6E6E6;"> {</span></span>
<span class="line"><span style="color:#E6E6E6;">  </span><span style="color:#C586C0;">return</span><span style="color:#E6E6E6;"> (</span></span>
<span class="line"><span style="color:#E6E6E6;">    </span><span style="color:#808080;">&lt;</span><span style="color:#4EC9B0;">Section</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#E6E6E6;">      </span><span style="color:#808080;">&lt;</span><span style="color:#4EC9B0;">Row</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#E6E6E6;">        </span><span style="color:#808080;">&lt;</span><span style="color:#4EC9B0;">Column</span><span style="color:#808080;">&gt;</span><span style="color:#E6E6E6;">A</span><span style="color:#808080;">&lt;/</span><span style="color:#4EC9B0;">Column</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#E6E6E6;">      </span><span style="color:#808080;">&lt;/</span><span style="color:#4EC9B0;">Row</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#E6E6E6;">      </span><span style="color:#808080;">&lt;</span><span style="color:#4EC9B0;">Row</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#E6E6E6;">        </span><span style="color:#808080;">&lt;</span><span style="color:#4EC9B0;">Column</span><span style="color:#808080;">&gt;</span><span style="color:#E6E6E6;">B</span><span style="color:#808080;">&lt;/</span><span style="color:#4EC9B0;">Column</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#E6E6E6;">      </span><span style="color:#808080;">&lt;/</span><span style="color:#4EC9B0;">Row</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#E6E6E6;">      </span><span style="color:#808080;">&lt;</span><span style="color:#4EC9B0;">Row</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#E6E6E6;">        </span><span style="color:#808080;">&lt;</span><span style="color:#4EC9B0;">Column</span><span style="color:#808080;">&gt;</span><span style="color:#E6E6E6;">C</span><span style="color:#808080;">&lt;/</span><span style="color:#4EC9B0;">Column</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#E6E6E6;">      </span><span style="color:#808080;">&lt;/</span><span style="color:#4EC9B0;">Row</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#E6E6E6;">    </span><span style="color:#808080;">&lt;/</span><span style="color:#4EC9B0;">Section</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#E6E6E6;">  );</span></span>
<span class="line"><span style="color:#E6E6E6;">};</span></span></code></pre><pre class="shiki slack-ochin vp-code-light"><code><span class="line"><span style="color:#7B30D0;">import</span><span style="color:#002339;"> { </span><span style="color:#2F86D2;">Column</span><span style="color:#002339;">, </span><span style="color:#2F86D2;">Row</span><span style="color:#002339;">, </span><span style="color:#2F86D2;">Section</span><span style="color:#002339;"> } </span><span style="color:#7B30D0;">from</span><span style="color:#002339;"> </span><span style="color:#A44185;">&#39;email-craft&#39;</span><span style="color:#002339;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0991B6;">const</span><span style="color:#002339;"> </span><span style="color:#7EB233;">Email</span><span style="color:#002339;"> </span><span style="color:#7B30D0;">=</span><span style="color:#002339;"> () </span><span style="color:#0991B6;">=&gt;</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#7B30D0;">return</span><span style="color:#002339;"> (</span></span>
<span class="line"><span style="color:#002339;">    &lt;</span><span style="color:#DC3EB7;">Section</span><span style="color:#002339;">&gt;</span></span>
<span class="line"><span style="color:#002339;">      &lt;</span><span style="color:#DC3EB7;">Row</span><span style="color:#002339;">&gt;</span></span>
<span class="line"><span style="color:#002339;">        &lt;</span><span style="color:#DC3EB7;">Column</span><span style="color:#002339;">&gt;A&lt;/</span><span style="color:#DC3EB7;">Column</span><span style="color:#002339;">&gt;</span></span>
<span class="line"><span style="color:#002339;">      &lt;/</span><span style="color:#DC3EB7;">Row</span><span style="color:#002339;">&gt;</span></span>
<span class="line"><span style="color:#002339;">      &lt;</span><span style="color:#DC3EB7;">Row</span><span style="color:#002339;">&gt;</span></span>
<span class="line"><span style="color:#002339;">        &lt;</span><span style="color:#DC3EB7;">Column</span><span style="color:#002339;">&gt;B&lt;/</span><span style="color:#DC3EB7;">Column</span><span style="color:#002339;">&gt;</span></span>
<span class="line"><span style="color:#002339;">      &lt;/</span><span style="color:#DC3EB7;">Row</span><span style="color:#002339;">&gt;</span></span>
<span class="line"><span style="color:#002339;">      &lt;</span><span style="color:#DC3EB7;">Row</span><span style="color:#002339;">&gt;</span></span>
<span class="line"><span style="color:#002339;">        &lt;</span><span style="color:#DC3EB7;">Column</span><span style="color:#002339;">&gt;C&lt;/</span><span style="color:#DC3EB7;">Column</span><span style="color:#002339;">&gt;</span></span>
<span class="line"><span style="color:#002339;">      &lt;/</span><span style="color:#DC3EB7;">Row</span><span style="color:#002339;">&gt;</span></span>
<span class="line"><span style="color:#002339;">    &lt;/</span><span style="color:#DC3EB7;">Section</span><span style="color:#002339;">&gt;</span></span>
<span class="line"><span style="color:#002339;">  );</span></span>
<span class="line"><span style="color:#002339;">};</span></span></code></pre></div><h2 id="component-props" tabindex="-1">Component Props <a class="header-anchor" href="#component-props" aria-label="Permalink to &quot;Component Props&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki slack-dark vp-code-dark"><code><span class="line"><span style="color:#9CDCFE;">disableDefaultStyle</span><span style="color:#D4D4D4;">?:</span><span style="color:#E6E6E6;"> </span><span style="color:#9CDCFE;">boolean</span><span style="color:#E6E6E6;">;</span></span></code></pre><pre class="shiki slack-ochin vp-code-light"><code><span class="line"><span style="color:#2F86D2;">disableDefaultStyle</span><span style="color:#7B30D0;">?:</span><span style="color:#002339;"> </span><span style="color:#2F86D2;">boolean</span><span style="color:#002339;">;</span></span></code></pre></div><p>If <code>true</code>, instructs the component <em>not to add</em> default <code>style</code> properties to the component. This can be useful when attempting to override default styles with <code>Tailwind</code> or class names.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>This component also expresses all of the <a href="https://react.dev/reference/react-dom/components/common" target="_blank" rel="noreferrer">Common Component Props</a> for <code>ComponentProps&lt;&#39;table&#39;&gt;</code>.</p></div>`,8);function E(a,m,C,g,u,h){return e(),p("div",null,[s("h2",r,[l(n(a.$frontmatter.title)+" ",1),i]),s("p",null,n(a.$frontmatter.description),1),y,s("p",null,"Install the "+n(a.$frontmatter.type)+" from your command line",1),d])}const f=o(c,[["render",E]]);export{v as __pageData,f as default};
