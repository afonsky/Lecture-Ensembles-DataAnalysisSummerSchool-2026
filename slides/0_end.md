---
zoom: 0.85
---

# Выводы

<v-clicks depth="2">

### Одиночные **деревья**:

<div class="grid grid-cols-[5fr_5fr] gap-1">
<div>

✅ **Достоинства**:

* Высокая интерпретируемость («белый ящик»)
* Работает со смешанными типами признаков
* Улавливает нелинейные зависимости и взаимодействия
* Встроенная важность признаков
</div>
<div>

❌ **Недостатки**:

* Высокая дисперсия
* Предсказания **негладкие** (ступенчатые функции)
* **Не могут экстраполировать** за пределы диапазона обучающих данных
* Жадный алгоритм — нет гарантии глобального оптимума
</div>
</div>
</v-clicks>

<br>
<v-click>

### Деревья можно объединять в **ансамбли**:

* Бэггинг, случайные леса
* Бустинг

<br>

### 🔥 Ансамбли деревьев обеспечивают высокие результаты для табличных данных на протяжении 20 лет!
</v-click>


---
layout: center
class: text-center
---

# Спасибо за внимание!

---
layout: center
class: text-center
---

# Дополнительные слайды

---

# Карта оценщиков (моделей) в Sklearn
<style>
.slidev-layout {
  font-size: 1.1em
}
</style>

<div class="grid grid-cols-[5fr_2fr] gap-15]">
<div>
<figure>
  <img src="/ml_map.png" style="width: 680px !important">
  <figcaption style="color:#b3b3b3ff; font-size: 9px;">Источник иллюстрации: <a href="https://scikit-learn.org/1.4/tutorial/machine_learning_map/index.html">https://scikit-learn.org/1.4/tutorial/machine_learning_map/index.html</a>
  </figcaption>
</figure>
</div>
<div>


* **Обучение с учителем**:
  * Регрессия
  * **Классификация**
* Обучение без учителя:
  * Кластеризация
  * Снижение размерности
* Другое:
  * Обучение с подкреплением
  * Полуконтролируемое
</div>
</div>

---
zoom: 0.85
---

# Модели МО

### Для использования МО нам нужно реализовать **математическую модель**<br> — выбор зависит от **задачи** и **данных**

<br>

<div class="grid grid-cols-2 gap-10 mt-2">
<div>

### Наиболее распространённые задачи и модели

| Задача | Модели |
|---|---|
| **Регрессия / Классификация** (табличные данные) | LM, GLM, BDT, XGBoost, NN, Ensemble |
| **Классификация** (визуальная) | CNN, ViT |
| **Снижение размерности** | SVD (PCA) |
| **Генерация изображений** | VAE, GAN, Diffusion Models |

</div>
<div>

### Классификация по типу обучения

**Обучение с учителем**<br> <small>(нужны размеченные данные:<br> Обучение → Тестирование → Валидация → Предсказание → Инференс)</small>
- Классификация
- Регрессия

**Обучение без учителя**<br> <small>(данные без известной структуры / меток)</small>
- Кластеризация
- Снижение размерности

</div>
</div>

---

# Сильные и слабые базовые алгоритмы

* Пусть:
  * $\textcolor{green}{\delta} \in (0, 1)$ — **допуск неопределённости**
  * $\textcolor{orange}{\epsilon} \in (0, 1)$ — **допуск неточности**
  * $\textcolor{violet}{\gamma} \in (0, \frac{1}{2})$ — **достижимое улучшение точности**
<br>

* Тогда для любого выбора $\textcolor{green}{\delta}$, $\textcolor{orange}{\epsilon}$ найдётся такое $m = m_{\mathcal H}(\textcolor{green}{\delta}, \textcolor{orange}{\epsilon}) \in \N$, что после обучения на не менее $m$ н.о.р. образцах из истинного распределения выполняется:

<br>
<div class="grid grid-cols-[3fr_3fr] gap-5">

<div>
<center>

### для **слабого алгоритма**

</center>
<br>

#### $\mathbb{P} \big(\mathrm{Accuracy}(f) > \textcolor{violet}{\frac{1}{2} + \gamma}\big) \geq \textcolor{green}{1 - \delta}$
</div>

<div>
<center>

### для **сильного алгоритма**
</center>
<br>

#### $\mathbb{P} \big(\mathrm{Accuracy}(f) > \textcolor{orange}{1 - \epsilon}\big) \geq \textcolor{green}{1 - \delta}$
</div>
</div>
<br>

##### На основе [https://cs229.stanford.edu/cs229-notes-decision_trees.pdf](https://cs229.stanford.edu/cs229-notes-decision_trees.pdf)


---
zoom: 0.9
---

# Оценка ошибки Out-of-Bag в бэггинге

#### Множество **Out-of-Bag (OOB)** — это все данные, не попавшие в бутстрэп-выборку

<br>
  <figure>
    <img src="/Ensemble_models-Out-of-Bag.drawio.svg" style="width: 620px; position: relative">
  </figure>

<br>

* OOB в ансамблях бэггинга:
  * Даёт практически несмещённую оценку ошибки обобщения при использовании достаточного количества деревьев
  * Не требует отдельного валидационного набора или кросс-валидации, экономя вычислительные ресурсы
  * Обычно используется для оценки модели, настройки гиперпараметров и отбора признаков
    * Особенно эффективно для больших наборов данных

---

# Пример дерева решений для регрессии

<br>
<br>
<div class="grid grid-cols-[4fr_4fr] gap-16">
<div>
  <figure>
    <img src="/regression_tree_2.png" style="width: 350px; position: relative">
    <figcaption style="color:#b3b3b3ff; font-size: 11px; position: absolute;"><br><br><br>Example based on:<br>
    <a href="https://scikit-learn.org/stable/auto_examples/tree/plot_tree_regression.html">https://scikit-learn.org/stable/auto_examples/tree/plot_tree_regression.html</a>
  </figcaption>
  </figure>
</div>
<div v-click>
  <figure>
    <img src="/regression_tree.png" style="width: 350px; position: relative;">
  </figure>
</div>
</div>