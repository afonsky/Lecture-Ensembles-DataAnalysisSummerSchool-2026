# Что такое бэггинг?

#### <span style="color: red;">**Бэггинг**</span> = <span style="color: red;">**B**</span>ootstrap + <span style="color: red;">**agg**</span>regat<span style="color: red;">**ing**</span>


<div class="grid grid-cols-[2fr_3fr] gap-50">
<div>
<br>
  <figure>
    <img src="/Ensemble_models-Bagging.drawio.svg" style="width: 420px; position: absolute">
  </figure>
</div>

<div>

#### **Бутстрэп** — это повторная выборка с заменой:

<br>

##### $\hat{f} (x) \to \hat{f}^{\ast 1} (x), \hat{f}^{\ast 2} (x), \hat{f}^{\ast 3} (x), ... \hat{f}^{\ast B} (x)$

<br>
<br>

* Регрессия: усреднение<br> $\hat{f}_{bag} (x) = \frac{1}{B} \sum\limits_{b=1}^B \hat{f}^{\ast b} (x)$
* Классификация: голосование большинством голосов (наиболее часто встречающийся класс)
</div>
</div>

---

# Бэггинг и компромисс смещения-дисперсии

<div class="grid grid-cols-[2fr_3fr] gap-10">
<div>
  <figure>
    <img src="/bias_vs_variance_1.png" style="width: 280px; position: relative">
  </figure>
</div>
<div>
  <figure>
    <img src="/bias_vs_variance_2.png" style="width: 400px; position: relative">
  </figure>
</div>
</div>

<br>

* Усредняя предсказания нескольких моделей, **бэггинг** <span v-mark="{ at: 2, color: 'rgba(233, 159, 0, 1)', type: 'underline' }">снижает дисперсию модели</span>, делая её менее склонной к переобучению
  * Но не снижает значительно смещение, если отдельные модели слабые

---
zoom: 0.95
---

# Случайный лес

* [Случайный лес](https://link.springer.com/article/10.1023/a:1010933404324) (L. Breiman, 2001) — это улучшение бэггинга: он ***декоррелируют*** деревья
  * При каждом рассматриваемом разбиении в дереве выбирается ***случайная выборка*** из $m$ предикторов<br> в качестве кандидатов для разбиения из полного набора $p$ предикторов 
<br>
  <figure>
    <img src="/RF_1.png" style="width: 650px; position: relative">
    <figcaption style="color:#b3b3b3ff; font-size: 11px;"><span>Источник иллюстрации: <a href="https://aiml.com/what-is-random-forest-2">https://aiml.com/what-is-random-forest-2</a></span>
    </figcaption>
  </figure>
