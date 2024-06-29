<template>

  <main class="w-full h-screen bg-white flex justify-center items-center p-4">

    <div class="border px-16 py-10 max-w-[600px] w-full rounded-xl">

      <RouterLink to="/dashboard" class="text-base font-bold mb-6 flex items-center">
        <span class="material-symbols-outlined">
          chevron_left
        </span>
        Profil saya
      </RouterLink>

      <div class="flex gap-8 justify-start items-start flex-wrap">
        <div class="w-[80px] sm:max-xl:w-[200px] aspect-square bg-center bg-no-repeat bg-cover rounded-full mb-4"
          :style="`background-image: url(${default_profile})`">
        </div>

        <div class="grow">
          <div class="flex flex-wrap gap-2 mb-2">
            <label for="" class="block font-bold">Nama</label>
            <!-- <div v-for="error of v$.usernameInput.$errors">
                <small class="text-cust-redish">{{ error.$message }}</small>
              </div> -->
          </div>
          <input type="text" v-model="name" readonly
            class="border rounded-md w-full p-3 focus:outline-none focus:border-cust-orange focus:ring-cust-orange focus:ring-1">
        </div>
      </div>

      <div class="flex flex-wrap gap-8 mt-4">


        <div class="grow">
          <div class="flex flex-wrap gap-2 mb-2">
            <label for="" class="block font-bold">Email</label>
            <!-- <div v-for="error of v$.usernameInput.$errors">
                  <small class="text-cust-redish">{{ error.$message }}</small>
                </div> -->
          </div>
          <input type="text" v-model="email" readonly
            class="border rounded-md w-full p-3 focus:outline-none focus:border-cust-orange focus:ring-cust-orange focus:ring-1">
        </div>

        <div class="grow">
          <div class="flex flex-wrap gap-2 mb-2">
            <label for="" class="block font-bold">PTN impian</label>
            <!-- <div v-for="error of v$.usernameInput.$errors">
                  <small class="text-cust-redish">{{ error.$message }}</small>
                </div> -->
          </div>
          <select id="cars" name="cars" v-model="originSchool" readonly
            class="w-full border p-3 rounded-md focus:outline-none focus:border-cust-orange focus:ring-cust-orange focus:ring-1">
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
            <option value="Universitas Islam Negeri Alauddin Makassar">Universitas Islam Negeri Alauddin Makassar
            </option>
            <option value="Universitas Islam Negeri Raden Fatah Palembang">Universitas Islam Negeri Raden Fatah
              Palembang
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
            <option value="Universitas Islam Negeri Sultan Syarif Kasim Riau">Universitas Islam Negeri Sultan Syarif
              Kasim
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
        </div>
      </div>

      <div class="flex flex-wrap gap-8 mt-6 mb-12">
        <div class="w-[50%]">
          <div class="flex flex-wrap gap-2 mb-2">
            <label for="" class="block font-bold">Tanggal SNBT</label>
            <!-- <div v-for="error of v$.usernameInput.$errors">
                  <small class="text-cust-redish">{{ error.$message }}</small>
                </div> -->
          </div>
          <input type="date" v-model="utbkDate" readonly
            class="border rounded-md w-full p-3 focus:outline-none focus:border-cust-orange focus:ring-cust-orange focus:ring-1">
        </div>
        <div class="grow">
          <div class="flex flex-wrap gap-2 mb-2">
            <label for="" class="block font-bold">Gender</label>
            <!-- <div v-for="error of v$.usernameInput.$errors">
                  <small class="text-cust-redish">{{ error.$message }}</small>
                </div> -->
          </div>
          <select id="cars" name="cars" v-model="gender" readonly
            class="w-full border p-3 rounded-md focus:outline-none focus:border-cust-orange focus:ring-cust-orange focus:ring-1">
            <option value="Universitas Indonesia">Laki-laki</option>
            <option value="Institut Teknologi Bandung">Perempuan</option>
          </select>
        </div>

      </div>




      <!-- <div class="flex gap-2 mb-6">
        <div>
          <span class="material-symbols-outlined text-[20px] lg:text-3xl xl:text-[20px]">
            wc
          </span>
        </div>
        <div class="basis-[80%] grow">
          <small class="text-cust-grey">Gender</small>
          <div class="text-wrap break-words">{{ gender ? gender : 'Belum diisi' }}</div>
        </div>
      </div> -->
      <!-- <div class="flex gap-2 mb-6">
        <div>
          <span class="material-symbols-outlined text-[20px] lg:text-3xl xl:text-[20px]">
            school
          </span>
        </div>
        <div class="basis-[80%] grow">
          <small class="text-cust-grey">Alumni SMA</small>
          <div class="text-wrap break-words">SMAN 3 PAMEKASAN</div>
        </div>
      </div> -->
      <!-- <div class="flex gap-2 mb-10">
        <div>
          <span class="material-symbols-outlined text-[20px] lg:text-3xl xl:text-[20px]">
            calendar_month
          </span>
        </div>
        <div class="basis-[80%] grow">
          <small class="text-cust-grey">Tanggal SNBT/UTBK</small>
          <div class="text-wrap break-words">{{ utbkDate ? utbkDate : 'belum diisi' }}</div>
        </div>
      </div> -->

      <div class="flex flex-wrap gap-4">
        <div class="grow">
          <ButtonComp :handleClick="() => { router.push(`/dashboard`) }" styleProp="fill" typeProp="secondary">
            Batal
          </ButtonComp>
        </div>
        <div class="grow">
          <ButtonComp :handleClick="handleSubmitEdit" styleProp="fill" typeProp="primary">
            Simpan
          </ButtonComp>
        </div>
      </div>
    </div>

  </main>

</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import { onMounted, ref } from 'vue'
import ButtonComp from '../../components/global/ButtonComp.vue'
import axios from 'axios'
import { useOpenLSidebar } from '@/stores/openLSidebar'
import default_profile from '../../assets/default_profile.svg'
import { toast } from 'vue3-toastify'


const storeOpenLsidebar = useOpenLSidebar()
const route = useRoute()
const router = useRouter()

const name = ref('')
const email = ref('')
const gender = ref('')
const originSchool = ref('')
const utbkDate = ref('')
const userId = ref(localStorage.getItem('userId'))

const handleSubmitEdit = () => {
  axios.patch(`http://13.212.182.128:3000/user/${userId.value}/update`,
    {
      name: name.value,
      email: email.value,
      gender: gender.value,
      originSchool: originSchool.value,
      utbkDate: utbkDate.value
    },
    {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
        'Content-Type': 'application/json'
      }
    }
  ).then((response) => {
    console.log(response)
    toast.success('Profile kamu telah terupdate!')
    router.replace('/')
  }).catch((error) => {
    toast.error('Error, silahkan coba lagi!')
    console.log(error)
  })

}

onMounted(() => {
  axios.get(`http://13.212.182.128:3000/user/${userId.value}`,
    {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    }
  ).then((response) => {
    console.log(response)
    console.log(response.data)
    name.value = response.data.data.name
    email.value = response.data.data.email
    gender.value = response.data.data.gender
    originSchool.value = response.data.data.originSchool
    utbkDate.value = response.data.data.utbkDate

  }).catch((error) => {
    console.log(error)
  })
})
</script>