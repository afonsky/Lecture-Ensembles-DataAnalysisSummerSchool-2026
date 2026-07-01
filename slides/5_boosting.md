---
zoom: 0.89
---

# Что такое бустинг?

#### **Бустинг** — ещё один подход для улучшения предсказаний, получаемых из дерева решений

<div class="grid grid-cols-[3fr_3fr] gap-20">
<div>
<br>
  <figure>
    <img src="/Ensemble_models-Boosting.drawio.svg" style="width: 430px; position: relative">
  </figure>
</div>

<div>

#### Как работает бустинг:
<div class="bg-orange-100">

1. Обучать слабые алгоритмы последовательно
1. Корректировать веса
1. Агрегировать предсказания
</div>
<br>

* Перевзвешивание данных основано на остатках
* Итоговый классификатор — взвешенная сумма отдельных классификаторов
</div>
</div>
<br>

<div class="grid grid-cols-[7fr_3fr] gap-10">
<div>

#### Преимущества бустинга:
<div class="bg-green-100">

* Снижает как смещение, так и дисперсию
* Хорошо работает со слабыми алгоритмами
</div>
</div>

<div>

#### Недостатки бустинга:
<div class="bg-red-100">

* Чувствителен к выбросам
* Вычислительно затратен
</div>
</div>
</div>

---

# Гиперпараметры бустинга

<div class="grid grid-cols-[3fr_4fr] gap-20">
<div>

* Количество деревьев $B$

* Параметр сжатия $\lambda$<br> (малое положительное число)
  * Управляет скоростью<br> обучения бустинга

* Количество $d$ разбиений в каждом дереве<br> (также называемое *глубиной взаимодействий*)
  * Управляет сложностью<br> бустинг-ансамбля
</div>
<div>
<br>
  <figure>
  <img src="/ISLP_figure_8.11.svg" style="width: 500px !important">
  <figcaption style="color:#b3b3b3ff; font-size: 11px;"><br>Источник иллюстрации:
    <a href="https://www.statlearning.com/">ISLP Рис. 8.11</a>
  </figcaption>
  </figure>
</div>
</div>
