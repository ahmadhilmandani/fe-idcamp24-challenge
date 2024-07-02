<template>
  <div>
    <NavbarComp />
    <main class="w-full min-h-screen bg-cust-orange-lightest flex justify-between px-4 xl:px-16">
      <div class="pt-32 xl:w-[70%]">
        <h1 class="custom-heading-1">
          <div class="relative w-fit mr-2 inline">
            <h1 class="relative z-[2] custom-heading-1 inline">
              Menolak Galau
            </h1>
            <div class="absolute bottom-0 left-0 bg-cust-orange w-full h-4 sm:h-6 z-[1] skew-x-[-15deg]">
            </div>
          </div>
          Memilih Jurusan
          <div class="relative w-fit ml-2 inline">
            <h1 class="relative z-[2] italic custom-heading-1 inline">
              Kulyah!
            </h1>
            <div class="absolute bottom-0 left-0 bg-cust-orange w-full h-4 sm:h-6 z-[1] skew-x-[-15deg]">
            </div>
          </div>
        </h1>

        <div class="xl:w-[70%] mt-12">
          <p class="text-[18px] sm:max-xl:text-[32px]">
            Lo Jawab pertanyaan aja, kita kasih rekomendasi jurusan!
          </p>

          <div class="xl:flex gap-4">
            <div class="max-w-[640px] w-full mt-6">
              <ButtonComp :handle-click="() => { router.replace('/test-jurusan/note') }" style-prop="fill"
                type-prop="primary">
                <div class="text-white font-bold px-2 py-1">
                  Wah kalau gitu harus gas!
                </div>
              </ButtonComp>
            </div>
            <div class="max-w-[640px] w-full mt-6">
              <ButtonComp :handle-click="() => { router.push('/test-jurusan/behind-the-scene') }" style-prop="outline"
                type-prop="secondary">
                <div class="text-cust-orange font-bold px-2 py-1">
                  Cek cara kerja web!
                </div>
              </ButtonComp>
            </div>
          </div>


          <p class="mt-16 mb-12 xl:mb-0 text-[12px] xl:text-[10px] sm:max-xl:text-[16px] block">
            Daftar pustaka: <br>
            Mulyani, E. D. S., Hidayat, C. R., & Ulfa, T. C. (2021). Sistem Pakar Untuk Menentukan Jurusan Kuliah
            Berdasarkan Minat dan Bakat Siswa SMA Dengan Menggunakan Metode Forward Chaining. CSRID (Computer Science
            Research and Its Development Journal), 10(2), 80.
            <a href="https://download.garuda.kemdikbud.go.id/article.php?article=957186&val=14716&title=Sistem%20Pakar%20Untuk%20Menentukan%20Jurusan%20Kuliah%20Berdasarkan%20Minat%20dan%20Bakat%20Siswa%20SMA%20Dengan%20Menggunakan%20Metode%20Forward%20Chaining"
              target="_blank" class="text-cust-blue underline text-[12px] xl:text-[10px] sm:max-xl:text-[16px] block">
              https://doi.org/10.22303/csrid.10.2.2018.80-92
            </a>
          </p>
        </div>

      </div>



      <div class="absolute xl:flex justify-end items-end bottom-0 right-0 hidden">
        <img :src="heroImage" alt="" srcset="" class="max-w-[680px]">
      </div>

    </main>
  </div>
</template>

<script setup>
import NavbarComp from '@/components/NavbarComp.vue'
import ButtonComp from '@/components/global/ButtonComp.vue'
import heroImage from '../assets/hero-image1.png'

import { useRouter } from 'vue-router'
const router = useRouter()
</script>