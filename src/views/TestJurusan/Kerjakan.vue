<template>
  <ModalComp v-if="storeLogout.modalLogoutOpen">
    <h1 class="font-semibold text-center text-2xl">Yakin nih mau Logout?</h1>
    <div class="mt-8 mb-3">
      <ButtonComp :handleClick="storeLogout.closedModal" styleProp="fill" typeProp="secondary">
        Ga jadi deh...
      </ButtonComp>
    </div>
    <ButtonComp :handleClick="handleLogout"  styleProp="fill" typeProp="primary">
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
          Fitur Tes Jurusan Kuliah merupakan fitur untuk membantu pengguna menemukan jurusan kuliah yang paling sesuai.
          Jadi kalau bingung mau masuk jurusan apa, boleh nih dicoba fitur ini...
        </p>
      </div>
      <div class="mt-5">
        <h2 class="font-bold mb-2">
          Cara kerja
        </h2>
        <p>
          Nanti ada beberapa pernyataan, nah dari pertanyaan tersebut jawabannya ada 4, kamu pilih satu aja yang paling
          sesuai sama kamu. 4 jawaban tersebut adalah:
        </p>
        <ul class="list-decimal list-inside">
          <li>
            Setuju
          </li>
          <li>
            Kurang Setuju
          </li>
          <li>
            Tidak Setuju
          </li>
          <li>
            Sangat Tidak Setuju
          </li>
        </ul>
        <p class="mt-3 mb-3">Dari jawaban tersebut, nanti akan diketahui jurusan yang sesuai sama kamu tuh apa</p>
      </div>
      <div class="mt-5">
        <h2 class="font-bold mb-2">
          Rujukan pembuatan test bisa dilihat <a
            href="https://d1wqtxts1xzle7.cloudfront.net/77867329/154-libre.pdf?1641083684=&response-content-disposition=inline%3B+filename%3DSistem_Pakar_Untuk_Menentukan_Jurusan_Ku.pdf&Expires=1719246271&Signature=bIxfoxQpPsjYh2~tksGFrMcTgtDvEbGbZIf7sKWPHFb0bvuemo--hpwdd3hKJamJfx8SuKMm7JbDUK-9-Yg-SzbO~oyCGSlLfMLRET0R9U52-nGjBOkeJCPrZUmYVO--HMExOhgxXijplfv-TVkpJTodDQU1PJf~jiKR267Uc43Krve3UM-ZkisZEGhGBJHgbNaV4fUgo5nE3SkWw3xzam8sD3gbg0ox1qnrIe2xcIQ~cKSUAhBdoLK~xkNI6ohHk-pH2ZxIIlX2cfy6brPby1rQXmAYl3E1WhaIim-lYovOwzENxHFzmkB613r7F2cn3MLCNCyBc93Gi1IFZvwnyw__&Key-Pair-Id=APKAJLOHF5GGSLRBV4ZA"
            target="_blank" class="underline text-cust-blue">di sini</a>
        </h2>
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
        <ButtonComp styleProp="fill" typeProp="primary" :handleClick="() => { router.push('/test-jurusan/pengerjaan') }">
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
import { useRouter } from 'vue-router'
const storeLogout = useLogout()
const router = useRouter()

const handleLogout = () => {
  localStorage.removeItem('token')
  router.replace('/login')
}
</script>