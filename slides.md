---
theme: seriph
addons:
  - "@twitwi/slidev-addon-ultracharger"
addonsConfig:
  ultracharger:
    inlineSvg:
      markersWorkaround: false
    disable:
      - metaFooter
      - tocFooter
background: /logo/mountain.jpg
highlighter: shiki
routerMode: hash
lineNumbers: false

css: unocss
title: Летняя школа по анализу данных
subtitle: Деревья и Ансамбли
date: 02/07/2026
venue: ВШЭ
author: Алексей Болдырев
---

<br>
<br>

# <span style="font-size:28.0pt" v-html="$slidev.configs.title?.replaceAll(' ', '<br/>')"></span>
# <span style="font-size:32.0pt" v-html="$slidev.configs.subtitle?.replaceAll(' ', '<br/>')"></span>
# <span style="font-size:18.0pt" v-html="$slidev.configs.author?.replaceAll(' ', '<br/>')"></span>

<span style="font-size:18.0pt" v-html="$slidev.configs.date?.replaceAll(' ', '<br/>')"></span>


<style>
  :deep(footer) { padding-bottom: 3em !important; }
</style>


---
src: ./slides/0_about.md
---

---
src: ./slides/0_introduction.md
---

---
src: ./slides/2_trees.md
---

---
src: ./slides/3_ensembles_intro.md
---

---
src: ./slides/4_bagging.md
---

---
src: ./slides/5_boosting.md
---

---
src: ./slides/0_end.md
---
