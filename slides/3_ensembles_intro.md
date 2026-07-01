---
layout: center
---

<center>

# Ансамблевые модели
</center>

---

# Мотивация: линейно неразделимые данные

<br>
<center>
  <figure>
    <img src="/Linearly_inseparable_data_1.png" style="width: 720px; position: absolute">
  </figure>
</center>

---

# Модель 1

<br>
<center>
  <figure>
    <img src="/Linearly_inseparable_data_2.png" style="width: 720px; position: absolute">
  </figure>
</center>

---

# Модель 2

<br>
<center>
  <figure>
    <img src="/Linearly_inseparable_data_3.png" style="width: 720px; position: absolute">
  </figure>
</center>

---

# Объединённые модели

<br>
<center>
  <figure>
    <img src="/Linearly_inseparable_data_4.png" style="width: 720px; position: absolute">
  </figure>
</center>

---

# Введение в ансамблевое обучение

<div class="grid grid-cols-[4fr_4fr] gap-30">
<div>

<br>
<br>
<v-clicks depth="2">

* Ансамблевые модели объединяют несколько базовых алгоритмов для повышения общей точности и надёжности предсказаний
  * Базовые алгоритмы — как правило, **деревья решений**

* Ансамблевые методы могут снижать дисперсию, уменьшать смещение модели и аппроксимировать сложные зависимости лучше, чем одиночные модели
</v-clicks>
</div>
<div>
<br>
<v-click at="2">
  <figure>
    <img src="/ensemble_of_fantasy_trees.jpeg" style="width: 350px; position: relative">
    <figcaption style="color:#b3b3b3ff; font-size: 11px;"><span>Источник иллюстрации: Perplexity Pro<br> Prompt: <samp>ensemble of fantasy forest trees playing violins, pipes, and drums, high-quality cartoon, 4K resolution</samp></span>
    </figcaption>
  </figure>
</v-click>
</div>
</div>

---
zoom: 0.95
---

# Почему деревья в качестве базовых алгоритмов?

<center>
<figure>
  <img src="/int_vs_flex_rus.drawio.svg" style="width: 430px; position: relative">
  <figcaption style="color:#b3b3b3ff; font-size: 11px;"><br>Иллюстрация основана на  <a href="https://www.statlearning.com/">ISLP Рис. 2.7</a>
</figcaption>
</figure>
</center>

* Деревья:
  * Всё ещё интерпретируемы, но достаточно гибкие модели
  * Вычислительно эффективны по сравнению с другими гибкими моделями
  * Могут одновременно работать с качественными и количественными предикторами

---

# Сильные и слабые базовые алгоритмы

<br>
<div class="grid grid-cols-[3fr_4fr_3fr] gap-5">
<div>
<div v-click at="2">
  <figure>
    <img src="/strong_and_weak_dog_meme_1.jpg" style="width: 300px; position: relative; border:3px solid #0099ff">
  </figure>
</div>
</div>
<div>
  <figure>
    <img src="/roc_curve.svg" style="width: 350px; position: relative">
  </figure>
</div>
<div>
<div v-click at="3">
  <figure>
    <img src="/strong_and_weak_dog_meme_2.jpg" style="width: 300px; position: relative; border:3px solid #ff9900">
  </figure>
</div>
</div>
</div>

<div v-click at="4">
    <Arrow x1="303" y1="150" x2="410" y2="230" width=1 color="#0099ff"/>
    <Arrow x1="677" y1="200" x2="603" y2="190" width=1 color="#ff9900"/>
<div style="color:#b3b3b3ff; font-size: 11px;">Источники изображений:<br> Мем с сильной и слабой собаками (слева и справа)</div>
<div style="color:#b3b3b3ff; font-size: 11px;"><a href="https://upload.wikimedia.org/wikipedia/commons/1/13/Roc_curve.svg">https://upload.wikimedia.org/wikipedia/commons/1/13/Roc_curve.svg</a> (по центру)</div>
</div>

---
zoom: 0.95
---

# Пни как базовые алгоритмы ансамблей

<br>

#### Пень (stump) — дерево решений глубиной $d = 1$
<div class="grid grid-cols-[4fr_3fr] gap-20">
<div>

<br>
<center>

```mermaid {securityLevel: 'loose', theme: 'neutral', scale: 1.0, flowchart: {'htmlLabels': true}}
graph TD

A(<p style="width:70px;height:25px;">Корень</p>) --> B(<p style="width:70px;height:25px;">Лист 1</p>)
A --> C(<p style="width:70px;height:25px;">Лист 2</p>)
style B fill:#77cc46ff,stroke:#37661bff,stroke-width:4px
style C fill:#77cc46ff,stroke:#37661bff,stroke-width:4px
```
</center>

* Граница решения, основанная на одном признаке
* Решающий пень — слабый алгоритм обучения
* Строительный блок алгоритма AdaBoost
</div>
<div>
  <figure>
    <img src="/AdaBoost_stump.jpg" style="width: 350px; position: relative border:3px">
    <figcaption style="color:#b3b3b3ff; font-size: 11px;"><span>Источник иллюстрации: Perplexity Pro<br> Промпт: <samp>fantasy style cartoon tree stump, high quality, 4K resolution</samp></span>
    </figcaption>
  </figure>
</div>
</div>

---

# Скрытая сила слабых алгоритмов

<div class="grid grid-cols-[4fr_3fr] gap-30">
<div>

#### Набор слабых алгоритмов можно объединить в сильный алгоритм
<br>
  <figure>
    <img src="/gravity_falls_gnomes.jpg" style="width: 230px; position: relative">
    <figcaption style="color:#b3b3b3ff; font-size: 11px;"><br>Источник иллюстрации:
    Gravity Falls, animated television series created by Alex Hirsch for Disney Channel and Disney XD (2012-2016)
    </figcaption>
  </figure>
</div>
<div>

<br>

#### Эта идея используется в следующих подходах

<br>
<center>

```mermaid {securityLevel: 'loose', theme: 'neutral', scale: 1.0, flowchart: {'htmlLabels': true}}
graph TD

A(<p style="width:200px;height:25px;">Ансамблевые модели</p>) --> B(<p style="width:70px;height:25px;">Бэггинг</p>)
A --> C(<p style="width:70px;height:25px;">Бустинг</p>)
B --> D(<p style="width:70px;height:50px;">Случайные<br>леса</p>)
A --> F(<p style="width:70px;height:25px;">Стекинг</p>)
```
</center>
</div>
</div>
