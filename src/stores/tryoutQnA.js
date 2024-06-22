import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useTryoutQnA = defineStore('TryoutQnA', () => {
  const question = ref(null)
  const answer = ref([])

  function getTryoutQ() {
    question.value = [
      {
        questionText: "Dani dipromosikan untuk mendapat posisi baru di perusahaan X sebagai kepala Divisi Pemasaran atau Sekretaris Direksi.Ternyata Budi terpilih sebagai Sekretaris Direksi di perusahaan X sehingga posisi tersebut telah terisi. Simpulan yang paling tepat adalah…",
        answer: "A",
        optionA: "Paris",
        optionB: "London",
        optionC: "Berlin",
        optionD: "Madrid",
        createdAt: "2023-06-19T12:00:00Z",
        updatedAt: "2023-06-19T12:00:00Z"
      },
      {
        questionText: "Apa ibu kota Indonesia?",
        answer: "B",
        optionA: "Jakarta",
        optionB: "Bandung",
        optionC: "Surabaya",
        optionD: "Yogyakarta",
        createdAt: "2023-06-19T12:00:00Z",
        updatedAt: "2023-06-19T12:00:00Z"
      },
      {
        questionText: "Siapa presiden pertama Indonesia?",
        answer: "Soekarno",
        optionA: "Soekarno",
        optionB: "Suharto",
        optionC: "Habibie",
        optionD: "Megawati",
        createdAt: "2023-06-19T12:01:00Z",
        updatedAt: "2023-06-19T12:01:00Z"
      },
      {
        questionText: "Pulau terbesar di Indonesia adalah?",
        answer: "Kalimantan",
        optionA: "Kalimantan",
        optionB: "Sumatera",
        optionC: "Jawa",
        optionD: "Sulawesi",
        createdAt: "2023-06-19T12:02:00Z",
        updatedAt: "2023-06-19T12:02:00Z"
      },
      {
        questionText: "Apa mata uang resmi Indonesia?",
        answer: "Rupiah",
        optionA: "Rupiah",
        optionB: "Ringgit",
        optionC: "Dolar",
        optionD: "Yen",
        createdAt: "2023-06-19T12:03:00Z",
        updatedAt: "2023-06-19T12:03:00Z"
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

  return { question, answer, getTryoutQ, setInitA, setAnswer }
}) 