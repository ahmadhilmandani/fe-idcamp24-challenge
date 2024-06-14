<template>
  <aside class="w-[280pt] p-4 border-l border-cust-grey-lighter">
    <h2 class="font-bold mb-4">
      Profil Saya
    </h2>
    <div class="w-[100px] aspect-square mx-auto bg-center bg-no-repeat bg-cover bg-red-100 rounded-full mb-4"
      :style="`background-image: url(${saya})`">
    </div>
    <h3 class="font-bold text-center text-base">Ahmad Hilman Dani</h3>
    <div class="text-cust-grey text-center mb-6">MABA UAE 2025</div>

    <div class="flex gap-2 mb-6">
      <div>
        <span class="material-symbols-outlined">
          mail
        </span>
      </div>
      <div>
        <small class="text-cust-grey">Email</small>
        <div>ahmadhilmandani@gmail.com</div>
      </div>
    </div>
    <div class="flex gap-2 mb-6">
      <div>
        <span class="material-symbols-outlined">
          wc
        </span>
      </div>
      <div>
        <small class="text-cust-grey">Gender</small>
        <div>Laki-laki</div>
      </div>
    </div>
    <div class="flex gap-2 mb-6">
      <div>
        <span class="material-symbols-outlined">
          school
        </span>
      </div>
      <div>
        <small class="text-cust-grey">Alumni SMA</small>
        <div>SMAN 3 PAMEKASAN</div>
      </div>
    </div>
    <div class="flex gap-2 mb-10">
      <div>
        <span class="material-symbols-outlined">
          calendar_month
        </span>
      </div>
      <div>
        <small class="text-cust-grey">Tanggal SNBT/UTBK</small>
        <div>21 Mei 2025</div>
      </div>
    </div>

    <h2 class="font-bold mb-4 text-center">
      2025 jadi Maba
    </h2>
    <div class="w-[100px] aspect-square mx-auto bg-center bg-no-repeat bg-cover rounded-full mb-4"
      :style="`background-image: url(${its})`"></div>
    <div class="text-cust-grey text-center mb-6 text-[10px]">Institur Teknologi Sepuluh Nopember</div>
  </aside>
</template>

<script setup>
import saya from '../assets/saya1.png'
import its from '../assets/its.png'
</script>