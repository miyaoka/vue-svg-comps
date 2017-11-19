<template>
  <div>
    <input
      class="range"
      type="range"
      min="12"
      max="100"
      step="any"
      v-model.number="fontSize"
      style="width:100%"
    />
    <textarea
      v-model="text"
    ></textarea>
    <spiral-text
      style="background:#9ff"
      :text="text"
      :font-size="fontSize"
      :size="400"
      :line-height="1.2"
    />
    <spiral-text
      style="background:#ff9"
      :text="text"
      :font-size="fontSize"
      :size="400"
      :line-height="1.2"
      :counterclockwise="true"
      :start-from-inner="true"
      :padding-inner="80"
      :init-angle="135"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SpiralText from '@/components/SpiralText.vue'

export default Vue.extend({
  name: 'app',
  components: {
    SpiralText
  },
  data: function () {
    return {
      text: `吾輩わがはいは猫である。名前はまだ無い。
どこで生れたかとんと見当けんとうがつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。吾輩はここで始めて人間というものを見た。しかもあとで聞くとそれは書生という人間中で一番獰悪どうあくな種族であったそうだ。この書生というのは時々我々を捕つかまえて煮にて食うという話である。しかしその当時は何という考もなかったから別段恐しいとも思わなかった。ただ彼の掌てのひらに載せられてスーと持ち上げられた時何だかフワフワした感じがあったばかりである。掌の上で少し落ちついて書生の顔を見たのがいわゆる人間というものの見始みはじめであろう。この時妙なものだと思った感じが今でも残っている。第一毛をもって装飾されべきはずの顔がつるつるしてまるで薬缶やかんだ。その後ご猫にもだいぶ逢あったがこんな片輪かたわには一度も出会でくわした事がない。のみならず顔の真中があまりに突起している。そうしてその穴の中から時々ぷうぷうと煙けむりを吹く。どうも咽むせぽくて実に弱った。これが人間の飲む煙草たばこというものである事はようやくこの頃知った。
この書生の掌の裏うちでしばらくはよい心持に坐っておったが、しばらくすると非常な速力で運転し始めた。書生が動くのか自分だけが動くのか分らないが無暗むやみに眼が廻る。胸が悪くなる。到底とうてい助からないと思っていると、どさりと音がして眼から火が出た。それまでは記憶しているがあとは何の事やらいくら考え出そうとしても分らない。`,
      fontSize: 20
    }
  }
})
</script>

<style>
</style>
