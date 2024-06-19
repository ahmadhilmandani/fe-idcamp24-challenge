<template>
  <ModalComp v-if="storeLogout.modalLogoutOpen">
    <h1 class="font-semibold text-center text-2xl">Yakin nih mau Logout?</h1>
    <div class="mt-8 mb-3">
      <ButtonComp :handleClick="storeLogout.closedModal" styleProp="fill" typeProp="secondary">
        Ga jadi deh...
      </ButtonComp>
    </div>
    <ButtonComp styleProp="fill" typeProp="primary">
      Yakin, nanti mampir lagi, kok!
    </ButtonComp>
  </ModalComp>

  <div class="basis-full flex-initial flex-wrap">
    <NavbarComp />
    <main class="px-4 pb-4 pt-10">
      <h1 class="text-3xl">
        Test Jurusan Kuliah
      </h1>
      <div class="mt-5">
        <h2 class="font-bold mb-2">
          Deskripsi
        </h2>
        <p>
          Fitur Tes Jurusan Kuliah merupakan fitur untuk membantu pengguna menemukan jurusan kuliah yang paling sesuai
          dengan cara menjawab serangkaian pertanyaan dan memasukkan nilai tryout yang telah diperoleh.
        </p>
      </div>
      <div class="mt-5">
        <h2 class="font-bold mb-2">
          Cara kerja
        </h2>
        <p>
          Variabel yang digunakan untuk menentukan jurusan dan PTN rekomendasi dari web ini adalah :
        </p>
        <ul class="list-decimal list-inside">
          <li>
            Nilai TryOut
          </li>
          <li>
            Hasil dari test kepribadian
          </li>
        </ul>
        <p class="mt-3 mb-3">Dari dua variabel tersebut, akan dihitung menggunakan rumus berikut...</p>
          <i class="text-center block text-xl">X = (Y + Z) / A </i>
        <div class="mt-3">
          Lalu akan disesuaikan dengan passing grade terbaru dari universitas yang didapatkan dari data
          <RouterLink to="" class="underline text-cust-orange">di sini</RouterLink>
          Sehingga nanti akan didapatkan 3 rekomendasi jurusan dan universitas yang paling sesuai
        </div>
      </div>
      <div class="mt-5">
        <h2 class="font-bold mb-2">
          Rujukan pembuatan test
        </h2>
        <ul>
          <li>
            pertanyaan kepribadian: <a href="" class="underline text-cust-blue">https://tailwindcss.com/docs/accent-color</a>
          </li>
          <li>
            daftar passing grade universitas: <a href="" class="underline text-cust-blue">https://tailwindcss.com/docs/accent-color</a>
          </li>
          <li>
            rumus perhitungan: <a href="" class="underline text-cust-blue">https://tailwindcss.com/docs/accent-color</a>
          </li>
        </ul>
      </div>
      <div class="my-10">
        <h2 class="font-bold mb-2 text-cust-redish">
          Catatan Penting!
        </h2>
        <p>
          Fitur ini <strong> dibangun sebagai pendukung keputusan. Hasil dari test ini tidak untuk pedoman utama dalam
            memilih jurusan dan PTN. </strong>
        </p>
      </div>
      <div class="w-80 mx-auto">
        <ButtonComp styleProp="fill" typeProp="primary" :handleClick="()=>{router.push('/test-jurusan/pengerjaan')}">
          Kerjakan Test Sekarang!
        </ButtonComp>
      </div>
    </main>
  </div>
</template>

<script setup>
import NavbarComp from '@/components/NavbarComp.vue'
import ButtonComp from '@/components/global/ButtonComp.vue'
import { useLogout } from '@/stores/logoutModal'
import {useRouter} from 'vue-router'
const storeLogout = useLogout()
const router = useRouter()
</script>