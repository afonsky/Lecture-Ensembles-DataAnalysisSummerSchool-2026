---
zoom: 0.95
---

# О лекторе


<style scoped>
.img-container {
  background-color: purple;
  padding: 10px 0;
  width: 200px;
}

img {
  border-radius: 50%;
  width: 180px;
  height: 180px;
  display: block;
  margin: 0 auto;
}

img.rect-img {
  object-fit: cover;
}

img.no-border-radius {
	height: auto;
	width: 380px;
  border-radius: 0; /* Make sure to remove the rounded border */
}

</style>

<div class="grid grid-cols-[3fr_4fr] gap-15">

<div>
<figure>
  <img src="/Alexey.jpg" style="width: 180px, height: 180px !important, border-radius: 50%;">
</figure>
<p style="text-align: center">Алексей Болдырев</p>
<br>

* Научный сотрудник и доцент<br> ФКН ВШЭ
* Преподаю:
  * **Машинное обучение**
  * Глубинное обучение
  * Визуализацию данных
</div>

<div>

<div v-click at="1">
<figure>
  <img src="/ATLAS.jpg" class="no-border-radius" style="width: 320px">
</figure>
</div>
<br>
<div v-click at="2">
<figure>
  <img src="/LHCb.jpg" class="no-border-radius" style="width: 320px">
</figure>
</div>
</div>
</div>
