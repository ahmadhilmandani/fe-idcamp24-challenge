<template>
  <div class="w-full flex-initial">
    <ModalComp v-if="storeLogout.modalLogoutOpen">
      <h1 class="font-semibold text-center text-2xl">Udah yakin mau udahan?</h1>
      <div class="mt-8 mb-3">
        <ButtonComp :handleClick="storeLogout.closedModal" styleProp="fill" typeProp="secondary">
          Belum yakin nih, mau ngerjakan lagi aja!
        </ButtonComp>
      </div>
      <ButtonComp :handleClick="handleJurusanRecomendation" styleProp="fill" typeProp="primary">
        Yakinnlah!
      </ButtonComp>
    </ModalComp>

    <!-- <div v-if="testJurusanQnAStore.finalResult.length != 0"
      class="fixed top-0 h-screen left-0 right-0 flex justify-center items-center bg-opacity-20 bg-cust-black z-[1000000000000000000]">
      <div class="w-[600px] bg-white border rounded-xl p-12">
        <p class="text-center mb-5">
          Wahh... hasil test nunjukin kalau kamu tuh spesial di bidang...
        </p>
        <div v-for="val in testJurusanQnAStore.finalResult" class="border mb-5 p-4 rounded-md">
          <h1 class="text-cust-orange">
            {{ testJurusanQnAStore.arrIntelegence[val].type }}
          </h1>
          <ol class="list-inside list-decimal">
            <li v-for="val2 in testJurusanQnAStore.arrIntelegence[val].jurusan">
              {{ val2 }}
            </li>
          </ol>
        </div>
        <div>
          <ButtonComp :handleClick="() => { router.push('/test-jurusan/kerjakan') }" styleProp="fill"
            typeProp="primary">
            Kembali
          </ButtonComp>
        </div>
      </div>
    </div> -->

    <NavbarComp />
    <main class="p-4 xl:p-10">
      <div v-for="(val, index) in testJurusanQnAStore.question" class="flex gap-4 mb-12">
        <h2 :id="++index" class="text-2xl font-bold">
          {{ index }}.
        </h2>
        <div>
          <div class="xl:text-xl leading-[150%] mb-4">
            {{ val.questionText }}
          </div>
          <AnswerComp :inputName="`${index}`" inputValue="4" optionAlphabet="A">
            Setuju
          </AnswerComp>
          <AnswerComp :inputName="`${index}`" inputValue="3" optionAlphabet="B">
            Kurang setuju
          </AnswerComp>
          <AnswerComp :inputName="`${index}`" inputValue="2" optionAlphabet="C">
            Tidak setuju
          </AnswerComp>
          <AnswerComp :inputName="`${index}`" inputValue="1" optionAlphabet="D">
            Sangat tidak setuju
          </AnswerComp>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import NavbarComp from '@/components/NavbarComp.vue'
import AnswerComp from '@/components//AnswerComp.vue'
import { useTestJurusanQnA } from '@/stores/testJurusanQnA'
import ModalComp from '@/components/global/ModalComp.vue'
import { useLogout } from '@/stores/logoutModal'
import ButtonComp from '@/components/global/ButtonComp.vue'
const storeLogout = useLogout()
const testJurusanQnAStore = useTestJurusanQnA()

testJurusanQnAStore.getTestJurusanQ()
testJurusanQnAStore.setInitA(testJurusanQnAStore.question.length)

const router = useRouter()

const calculateIntelligence = (startIndex, endIndex) => {
  let tempt = 0
  for (let index = startIndex; index < endIndex; index++) {
    tempt = tempt + Number(testJurusanQnAStore.answer[index])
  }
  return tempt
}

const handleJurusanRecomendation = () => {
  storeLogout.closedModal()
  const arrScoreIntelligence = []

  const linguisticVerbal = calculateIntelligence(0, 12)
  arrScoreIntelligence.push(linguisticVerbal)

  const logicMath = calculateIntelligence(12, 24)
  arrScoreIntelligence.push(logicMath)

  const SpasialVisual = calculateIntelligence(24, 36)
  arrScoreIntelligence.push(SpasialVisual) 

  const ritmikMusic = calculateIntelligence(36, 48)
  arrScoreIntelligence.push(ritmikMusic)

  const kinestetik = calculateIntelligence(48, 60)
  arrScoreIntelligence.push(kinestetik)

  const interpersonal = calculateIntelligence(60, 72)
  arrScoreIntelligence.push(interpersonal)

  const intrapersonal = calculateIntelligence(72, 84)
  arrScoreIntelligence.push(intrapersonal)

  const naturalis = calculateIntelligence(84, 96)
  arrScoreIntelligence.push(naturalis)
  
  const eksistensial = calculateIntelligence(96, 108)
  arrScoreIntelligence.push(eksistensial)

  let tempt = []
  arrScoreIntelligence.forEach(
    (val, index) => {
      if (val == Math.max(...arrScoreIntelligence)) {
        tempt.push(index)
      }
    }
  )
  testJurusanQnAStore.getFinalResult(tempt)

  router.replace('/test-jurusan/hasil')
}
</script>