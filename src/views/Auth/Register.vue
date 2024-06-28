<template>
  <div class="w-full xl:w-[40%] bg-white flex justify-center items-center py-20">
    <main class="w-[80%] xl:w-[65%] aspect-[4/6] flex flex-col justify-center">

      <h1 class="font-bold text-4xl">
        CA<span class="font-bold text-4xl text-cust-orange">MABA</span>
      </h1>
      <loading :active="isLoading" opacity="0.85" color="#DD761C" background-color="#1C1C1C" :lock-scroll="true"
        :is-full-page="true" />
      <div class="leading-[150%] mt-4 font-semibold text-2xl">Register Sekarang!!!</div>
      <div class="leading-[150%]">Isi form dibawah ini yaa!</div>

      <div class="mt-8">
        <div class="flex flex-wrap gap-2 mb-1">
          <label for="" class="block font-bold">Nama</label>
          <div v-for="error of v$.usernameInput.$errors">
            <small class="text-cust-redish">{{ error.$message }}</small>
          </div>
        </div>
        <input type="text" v-model="form.usernameInput"
          class="border rounded-md w-full p-3 focus:outline-none focus:border-cust-orange focus:ring-cust-orange focus:ring-1">
      </div>

      <!-- <div class="mt-6 flex items-center gap-2 flex-wrap">
        <label for="">PTN impian</label>
        <select id="cars" name="cars"
          class="grow border p-3 rounded-md focus:outline-none focus:border-cust-orange focus:ring-cust-orange focus:ring-1">
          <option value="Universitas Indonesia">Universitas Indonesia</option>
          <option value="Institut Teknologi Bandung">Institut Teknologi Bandung</option>
          <option value="Universitas Gadjah Mada">Universitas Gadjah Mada</option>
          <option value="Universitas Airlangga">Universitas Airlangga</option>
          <option value="Universitas Brawijaya">Universitas Brawijaya</option>
          <option value="Universitas Diponegoro">Universitas Diponegoro</option>
          <option value="Universitas Padjajaran">Universitas Padjajaran</option>
          <option value="Universitas Negeri Yogyakarta">Universitas Negeri Yogyakarta</option>
          <option value="Universitas Sam Ratulangi">Universitas Sam Ratulangi</option>
          <option value="Universitas Hasanuddin">Universitas Hasanuddin</option>
          <option value="Universitas Andalas">Universitas Andalas</option>
          <option value="Universitas Sumatera Utara">Universitas Sumatera Utara</option>
          <option value="Universitas Riau">Universitas Riau</option>
          <option value="Universitas Sriwijaya">Universitas Sriwijaya</option>
          <option value="Universitas Lambung Mangkurat">Universitas Lambung Mangkurat</option>
          <option value="Universitas Udayana">Universitas Udayana</option>
          <option value="Universitas Mataram">Universitas Mataram</option>
          <option value="Universitas Tadulako">Universitas Tadulako</option>
          <option value="Universitas Haluoleo">Universitas Haluoleo</option>
          <option value="Universitas Tanjungpura">Universitas Tanjungpura</option>
          <option value="Universitas Mulawarman">Universitas Mulawarman</option>
          <option value="Universitas Cenderawasih">Universitas Cenderawasih</option>
          <option value="Universitas Negeri Manado">Universitas Negeri Manado</option>
          <option value="Universitas Khairun">Universitas Khairun</option>
          <option value="Universitas Papua">Universitas Papua</option>
          <option value="Universitas Pertahanan">Universitas Pertahanan</option>
          <option value="Universitas Maritim Raja Ali Haji">Universitas Maritim Raja Ali Haji</option>
          <option value="Universitas Halu Oleo">Universitas Halu Oleo</option>
          <option value="UPN Veteran Jawa Timur">UPN Veteran Jawa Timur</option>
          <option value="UPN Veteran Jakarta">UPN Veteran Jakarta</option>
          <option value="Universitas Pendidikan Indonesia">Universitas Pendidikan Indonesia</option>
          <option value="Universitas Negeri Jakarta">Universitas Negeri Jakarta</option>
          <option value="Universitas Negeri Surabaya">Universitas Negeri Surabaya</option>
          <option value="Universitas Negeri Malang">Universitas Negeri Malang</option>
          <option value="Universitas Negeri Semarang">Universitas Negeri Semarang</option>
          <option value="Universitas Negeri Makassar">Universitas Negeri Makassar</option>
          <option value="Universitas Negeri Medan">Universitas Negeri Medan</option>
          <option value="Universitas Negeri Padang">Universitas Negeri Padang</option>
          <option value="Universitas Negeri Manado">Universitas Negeri Manado</option>
          <option value="Universitas Negeri Gorontalo">Universitas Negeri Gorontalo</option>
          <option value="Universitas Negeri Palu">Universitas Negeri Palu</option>
          <option value="Universitas Negeri Makassar">Universitas Negeri Makassar</option>
          <option value="Universitas Negeri Makasar">Universitas Negeri Makasar</option>
          <option value="Universitas Negeri Surabaya">Universitas Negeri Surabaya</option>
          <option value="Universitas Negeri Yogyakarta">Universitas Negeri Yogyakarta</option>
          <option value="Universitas Negeri Malang">Universitas Negeri Malang</option>
          <option value="Universitas Negeri Semarang">Universitas Negeri Semarang</option>
          <option value="Universitas Negeri Papua">Universitas Negeri Papua</option>
          <option value="Universitas Negeri Makassar">Universitas Negeri Makassar</option>
          <option value="Universitas Negeri Manado">Universitas Negeri Manado</option>
          <option value="Universitas Negeri Gorontalo">Universitas Negeri Gorontalo</option>
          <option value="Universitas Negeri Palu">Universitas Negeri Palu</option>
          <option value="Universitas Islam Negeri Syarif Hidayatullah Jakarta">Universitas Islam Negeri Syarif
            Hidayatullah Jakarta</option>
          <option value="Universitas Islam Negeri Maulana Malik Ibrahim Malang">Universitas Islam Negeri Maulana Malik
            Ibrahim Malang</option>
          <option value="Universitas Islam Negeri Sunan Ampel Surabaya">Universitas Islam Negeri Sunan Ampel Surabaya
          </option>
          <option value="Universitas Islam Negeri Sunan Kalijaga Yogyakarta">Universitas Islam Negeri Sunan Kalijaga
            Yogyakarta</option>
          <option value="Universitas Islam Negeri Alauddin Makassar">Universitas Islam Negeri Alauddin Makassar</option>
          <option value="Universitas Islam Negeri Raden Fatah Palembang">Universitas Islam Negeri Raden Fatah Palembang
          </option>
          <option value="Universitas Islam Negeri Sunan Gunung Djati Bandung">Universitas Islam Negeri Sunan Gunung
            Djati Bandung</option>
          <option value="Universitas Islam Negeri Ar-Raniry Banda Aceh">Universitas Islam Negeri Ar-Raniry Banda Aceh
          </option>
          <option value="Universitas Islam Negeri Walisongo Semarang">Universitas Islam Negeri Walisongo Semarang
          </option>
          <option value="Universitas Islam Negeri Antasari Banjarmasin">Universitas Islam Negeri Antasari Banjarmasin
          </option>
          <option value="Universitas Islam Negeri Raden Intan Lampung">Universitas Islam Negeri Raden Intan Lampung
          </option>
          <option value="Universitas Islam Negeri Sultan Maulana Hasanuddin Banten">Universitas Islam Negeri Sultan
            Maulana Hasanuddin Banten</option>
          <option value="Universitas Islam Negeri Sultan Syarif Kasim Riau">Universitas Islam Negeri Sultan Syarif Kasim
            Riau</option>
          <option value="Universitas Islam Negeri Mataram">Universitas Islam Negeri Mataram</option>
          <option value="Universitas Islam Negeri Imam Bonjol Padang">Universitas Islam Negeri Imam Bonjol Padang
          </option>
          <option value="Universitas Islam Negeri Sultan Thaha Saifuddin Jambi">Universitas Islam Negeri Sultan Thaha
            Saifuddin Jambi</option>
          <option value="Institut Teknologi Bandung">Institut Teknologi Bandung</option>
          <option value="Institut Teknologi Sepuluh Nopember">Institut Teknologi Sepuluh Nopember</option>
          <option value="Institut Pertanian Bogor">Institut Pertanian Bogor</option>
          <option value="Institut Teknologi Sumatera">Institut Teknologi Sumatera</option>
          <option value="Institut Teknologi Nasional Bandung">Institut Teknologi Nasional Bandung</option>
          <option value="Institut Teknologi Medan">Institut Teknologi Medan</option>
          <option value="Institut Teknologi Kalimantan">Institut Teknologi Kalimantan</option>
          <option value="Institut Teknologi Adhi Tama Surabaya">Institut Teknologi Adhi Tama Surabaya</option>
          <option value="Institut Teknologi Telkom Purwokerto">Institut Teknologi Telkom Purwokerto</option>
          <option value="Institut Teknologi Sumatera Utara">Institut Teknologi Sumatera Utara</option>
          <option value="Institut Teknologi Bandung Cirebon">Institut Teknologi Bandung Cirebon</option>
          <option value="Institut Teknologi dan Bisnis Kalbis">Institut Teknologi dan Bisnis Kalbis</option>
          <option value="Institut Teknologi Kalimantan Selatan">Institut Teknologi Kalimantan Selatan</option>
          <option value="Institut Teknologi Sumatra Barat">Institut Teknologi Sumatra Barat</option>
          <option value="Institut Teknologi Sulawesi Utara">Institut Teknologi Sulawesi Utara</option>
          <option value="Institut Teknologi Nusa Irian">Institut Teknologi Nusa Irian</option>
        </select>
      </div> -->

      <div class="mt-3">
        <div class="flex flex-wrap gap-2 mb-1">
          <label for="" class="block font-bold">Email</label>
          <div v-for="error of v$.emailInput.$errors">
            <small class="text-cust-redish">{{ error.$message }}</small>
          </div>
        </div>
        <input type="email" v-model="form.emailInput"
          class="border rounded-md w-full p-3 focus:outline-none focus:border-cust-orange focus:ring-cust-orange focus:ring-1">
      </div>

      <div class="mt-3">
        <div class="flex flex-wrap gap-2 mb-1">
          <label for="" class="block font-bold">Password</label>
          <div v-for="error of v$.passwordInput.$errors">
            <small class="text-cust-redish">{{ error.$message }}</small>
          </div>
        </div>
        <input type="password" v-model="form.passwordInput"
          class="border rounded-md w-full p-3 focus:outline-none focus:border-cust-orange focus:ring-cust-orange focus:ring-1">
      </div>

      <div class="mt-3 mb-8">
        <div class="flex flex-wrap gap-2 mb-1">
          <label for="" class="block font-bold">Ulangi Password</label>
          <div v-for="error of v$.passwordInput.$errors">
            <small class="text-cust-redish">{{ error.$message }}</small>
          </div>
        </div>
        <input type="password"
          class="border rounded-md w-full p-3 focus:outline-none focus:border-cust-orange focus:ring-cust-orange focus:ring-1">
      </div>

      <ButtonComp :handleClick="handleRegister" styleProp="fill" typeProp="primary">
        Daftar
      </ButtonComp>

      <div class="text-center mt-5 block">
        Udah punya akun? <RouterLink to="/login" class="text-cust-orange underline hover:font-bold">Login di sini
        </RouterLink>
      </div>

    </main>
  </div>
</template>

<script setup>
import useVuelidate from '@vuelidate/core'
import { email, required } from '@vuelidate/validators'

import ButtonComp from '@/components/global/ButtonComp.vue'
import axios from 'axios';
import { RouterLink, useRouter } from 'vue-router'
import { ref } from 'vue'
import Loading from 'vue-loading-overlay'
import { toast } from 'vue3-toastify'

const isLoading = ref(false)
const form = ref({
  emailInput: '',
  usernameInput: '',
  passwordInput: ''
})

const router = useRouter()

const rules = {
  emailInput: { required, email }, // Matches state.firstName
  usernameInput: { required },
  passwordInput: { required }
}

const v$ = useVuelidate(rules, form)
v$.value.$touch()

async function handleRegister() {
  v$.value.$touch()
  if (!v$.value.$invalid) {  
    axios.post('http://13.212.182.128:3000/auth/register',
      {
        "email": form.value.emailInput,
        "name": form.value.usernameInput,
        "password": form.value.passwordInput
      }, {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    ).then((response) => {
      toast.success("Pendaftaran berhasil, silahkan login!")
      router.replace('/login')
    }).catch((error) => {
      toast.error("Pendaftaran belum berhasil, coba lagi...")
    }).finally(() => {
      isLoading.value = false
    })
    isLoading.value = false

}

}
</script>