import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useTestJurusanQnA = defineStore('testJurusanQnA', () => {
  const question = ref(null)
  const answer = ref([])

  function getTestJurusanQ() {
    question.value = [
      {
        questionText: "Sekolah asal adalah SMA"
      },
      {
        questionText: "Jurusan adalah IPA"
      },
      {
        questionText: "Tertarik masuk teknik"
      },
      {
        questionText: "Rata-rata nilai matematika, bahasa inggris, kimia, fisika, biologi kelas 10 dan keals 11 >= 75"
      },
      {
        questionText: "Tertarik pada bidang komputer"
      },
      {
        questionText: "Ingin mempelajari komputer lebih dalam"
      },
      {
        questionText: "Tertarik pada kontruksi bangunan"
      },
      {
        questionText: "Tertarik dengan ilmu bisnis"
      },
      {
        questionText: "Senang belajar tentang pembukuan keuangan"
      },
      {
        questionText: "Tertarik dengan ilmu biologi"
      },
      {
        questionText: "Ingin belajar tentang kesehatan dan penyembuhan"
      },
      {
        questionText: "Tertarik belajar bahasa inggris"
      }
    ]
  }

  function setInitA(lengthA) {
    for (let index = 0; index < lengthA; index++) {
      answer.value.push(null)
    }
  }

  function setAnswer(indexA, valueA) {
    answer.value[indexA] = valueA
  }

  return { question, answer, getTestJurusanQ, setInitA, setAnswer }
}) 