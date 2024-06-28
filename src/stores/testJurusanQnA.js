import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useTestJurusanQnA = defineStore('testJurusanQnA', () => {
  const question = ref(null)
  const answer = ref([])
  const finalResult = ref([])
  const arrIntelegence = ref([
    {
      type: 'Kecerdasan Linguistic-Verbal',
      jurusan: [
        'Ilmu Perpustakaan',
        'Ilmu Komunikasi',
        'Bahasa Hubungan Internasional',
        'Ilmu Hukum',
        'Ilmu Politik'
      ]
    },
    {
      type: 'Kecerdasan Logika–Matematik',
      jurusan: [
        'Statistika',
        'Administrasi Negara',
        'Akuntansi',
        'Ilmu Ekonomi',
        'Pendidikan Matematika',
        'Ilmu Fisika',
        'Teknik Informatika',
        'Sistem Informasi'
      ]
    },
    {
      type: 'Kecerdasan Spasial-Visual',
      jurusan: [
        'Seni Rupa',
        'Teknik Arsitektur',
        'Planologi',
        'Teknik Sipil'
      ]
    },
    {
      type: 'Kecerdasan Ritmik-Musik',
      jurusan: [
        'Seni Musik'
      ]
    },
    {
      type: 'Kecerdasan Kinestetik',
      jurusan: [
        'Kedokteran Gigi',
        'Kebidanan',
        'Seni tari',
      ]
    },
    {
      type: 'Kecerdasan Interpersonal',
      jurusan: [
        'Ilmu sosiologi',
        'PGPAUD',
        'PGSD',
        'Psikologi',
        'Kedokteran',
        'Ilmu Keperawatan ',
        'Fakultas Kesehatan Masyarakat',
        'Antropologi'
      ]
    },
    {
      type: 'Kecerdasan Intrapersonal',
      jurusan: [
        'Ilmu Agama',
        'Administrasi Niaga',
        'Seni tari',
      ]
    },
    {
      type: 'Kecerdasan Naturalis',
      jurusan: [
        'Kedokteran Hewan',
        'Fakultas Perikanan',
        'Fakultas Peternakan',
        'Ilmu Biologi',
        'Fakultas Pertanian'
      ]
    },
    {
      type: 'Kecerdasan Eksistensial',
      jurusan: [
        'Ilmu Filsafat',
        'Ilmu Sejarah'
      ]
    }
  ])

  function getTestJurusanQ() {
    question.value =
      [
        { questionText: "Suka bercerita." },
        { questionText: "Memiliki ingatan yang baik untuk hal-hal yang sepele." },
        { questionText: "Menyukai permainan kata-kata." },
        { questionText: "Hobi membaca buku." },
        { questionText: "Seorang pembicara yang baik." },
        { questionText: "Menyukai pelajaran bahasa daripada matematika dan ilmu alam." },
        { questionText: "Senang membicarakan dan menulis ide-ide yang ada di otak." },
        { questionText: "Memiliki kosakata yang cukup banyak sehingga tidak ada hambatan atau kesulitan dalam berkomunikasi dengan berbagai kalangan." },
        { questionText: "Senang menulis karangan, atau segala hal yang berbentuk tulisan." },
        { questionText: "Lebih memilih untuk menulis dalam presentasi kelompok." },
        { questionText: "Dapat menggunakan banyak kata-kata yang berbeda untuk mengekspresikan diri." },
        { questionText: "Menyukai perdebatan dan diskusi." },
        { questionText: "Sangat menyukai pelajaran matematika." },
        { questionText: "Menyukai permainan yang menggunakan logika, seperti teka-teki angka." },
        { questionText: "Dapat memecahkan soal-soal hitungan." },
        { questionText: "Jika harus mengingat sesuatu, cenderung menempatkan setiap kejadian dalam urutan yang logis." },
        { questionText: "Senang mencari tahu bagaimana cara kerja setiap benda." },
        { questionText: "Menyukai komputer dan berbagai permainan angka-angka." },
        { questionText: "Menyukai permainan catur, sudoku, atau monopoli." },
        { questionText: "Dapat menghitung angka di luar kepala dengan mudah." },
        { questionText: "Jika sesuatu rusak dan tidak berfungsi, akan melihat bagian-bagiannya dan mencari tahu bagaimana cara kerjanya." },
        { questionText: "Suka berpikir melalui masalah dengan hati-hati, mempertimbangkan segala konsekuensinya." },
        { questionText: "Senang menonton film atau membaca buku yang melibatkan berfikir logis seperti buku / film detektif." },
        { questionText: "Senang membuat eksperimen sederhana." },
        { questionText: "Lebih memilih peta daripada petunjuk tertulis dalam mencari sebuah alamat." },
        { questionText: "Gemar dan mampu mengerjakan teka-teki menyusun potongan gambar, labirin dan teka-teki visual lainnya." },
        { questionText: "Hobi dalam bidang fotografi." },
        { questionText: "Senang menggambar dan menciptakan sesuatu." },
        { questionText: "Menyukai pelajaran geografi daripada matematika." },
        { questionText: "Senang membuat coretan-coretan di kertas." },
        { questionText: "Ketika membaca majalah, lebih suka melihat gambar-gambarnya daripada membaca teksnya." },
        { questionText: "Mahir membangun konstruksi tiga dimensi seperti lego." },
        { questionText: "Lebih mudah belajar dengan gambar daripada dengan teks." },
        { questionText: "Menyukai pelajaran seni rupa." },
        { questionText: "Menata ulang ruang adalah hal menyenangkan." },
        { questionText: "Dapat dengan mudah membayangkan bagaimana penampakan suatu benda dilihat dari berbagai sisi." },
        { questionText: "Senang mendengarkan musik dan radio." },
        { questionText: "Cenderung bersenandung ketika sedang melakukan aktivitas." },
        { questionText: "Memiliki suara yang merdu." },
        { questionText: "Bisa memainkan salah satu alat musik dengan baik." },
        { questionText: "Suka mendengarkan musik sambil belajar atau sambil membaca buku." },
        { questionText: "Jika harus mengingat sesuatu, mencoba untuk membuat irama tentang hal tersebut." },
        { questionText: "Menikmati berbagai macam gaya musik." },
        { questionText: "Apabila mendengarkan suatu karya musik satu atau dua kali, dapat menyanyikannya kembali dengan cukup baik." },
        { questionText: "Jika sesuatu rusak dan tidak berfungsi, cenderung mengetuk-ngetuk jari membentuk suatu irama sambil mencari jalan keluar." },
        { questionText: "Lebih bersemangat ketika musik dimainkan." },
        { questionText: "Tahu apabila ada nada musik yang sumbang." },
        { questionText: "Kadangkala berjalan kaki sambil melantunkan lagu." },
        { questionText: "Olahraga merupakan suatu hobi." },
        { questionText: "Menyukai kegiatan-kegiatan seperti menjahit dan membuat bentuk-bentuk." },
        { questionText: "Penting untuk menyentuh benda yang baru ditemukan untuk melengkapi informasi mengenai benda tersebut." },
        { questionText: "Tidak dapat duduk diam dalam waktu yang lama." },
        { questionText: "Selalu menggunakan gerak tangan atau bahasa tubuh lain ketika berbicara dengan orang lain." },
        { questionText: "Pernah mempunyai prestasi yang cukup menonjol di salah satu atau lebih cabang olahraga." },
        { questionText: "Menikmati kegiatan yang menantang bahaya atau pengalaman fisik yang menegangkan." },
        { questionText: "Suka pekerjaan yang melibatkan keterampilan tangan." },
        { questionText: "Jika sesuatu rusak dan tidak berfungsi, cenderung memisahkan setiap bagian lalu menggabungkannya kembali." },
        { questionText: "Harus mempraktikan sesuatu keterampilan yang baru, tidak sekedar membaca atau melihat." },
        { questionText: "Gagasan terbaik biasanya muncul ketika jalan-jalan atau joging atau saat terlibat kegiatan fisik lainnya." },
        { questionText: "Ikut sekurang-kurangnya satu kegiatan olahraga atau kegiatan fisik secara teratur." },
        { questionText: "Mampu bergaul baik dengan orang lain." },
        { questionText: "Senang berkumpul dan berorganisasi." },
        { questionText: "Mempunyai beberapa teman dekat." },
        { questionText: "Suka untuk mengajar orang lain tentang hal-hal yang dipelajari." },
        { questionText: "Senang bekerja sama dalam kelompok." },
        { questionText: "Sering didatangi orang untuk dimintai nasehat atau saran, baik di sekolah maupun di lingkungan tempat tinggal." },
        { questionText: "Jika harus mengingat sesuatu akan meminta seseorang untuk menguji." },
        { questionText: "Dalam berargumentasi, cenderung meminta bantuan teman atau pihak- pihak yang memiliki otoritas (ahli) dalam bidang tersebut." },
        { questionText: "Senang terlibat dalam kegiatan sosial yang berkaitan dengan organisasi sekolah atau lingkungan tempat tinggal." },
        { questionText: "Orang sering menunjuk sebagai pemimpin." },
        { questionText: "Ketika sedang ada masalah, cenderung meminta bantuan kepada orang lain daripada berusaha menyelesaikan masalah itu sendirian." },
        { questionText: "Lebih suka permainan bersama untuk mengisi waktu luang daripada hiburan bersifat individual seperti main game." },
        { questionText: "Suka mengerjakan sesuatu sendirian tanpa ada gangguan orang lain." },
        { questionText: "Memiliki buku harian atau catatan pribadi untuk menuliskan kehidupan pribadi." },
        { questionText: "Mampu belajar dari kegagalan dan keberhasilan yang pernah dialami." },
        { questionText: "Tidak suka keramaian." },
        { questionText: "Tahu kelebihan dan kekurangan diri sendiri." },
        { questionText: "Memiliki tekad yang kuat, mandiri dan berpendirian kuat (tidak mudah ikut-ikutan orang lain)." },
        { questionText: "Jika harus mengingat sesuatu, cenderung menutup mata dan merasakan situasi yang sedang terjadi." },
        { questionText: "Lebih memilih menghabiskan akhir pekan sendirian daripada menghabiskan waktu bersama teman." },
        { questionText: "Jika sesuatu rusak dan tidak berfungsi, akan mempertimbangkan apakah benda tersebut layak untuk diperbaiki." },
        { questionText: "Menganggap sebagai orang yang mandiri." },
        { questionText: "Memiliki tujuan-tujuan penting dalam hidup, yang dipikirkan secara teratur." },
        { questionText: "Memiliki hobi atau minat khusus yang disimpan untuk diri sendiri." },
        { questionText: "Sangat memperhatikan sekeliling dan apa yang sedang terjadi di sekitar." },
        { questionText: "Senang berjalan-jalan di hutan (atau taman) dan melihat-lihat pohon serta bunga." },
        { questionText: "Senang berkebun." },
        { questionText: "Mempunyai minat cukup besar pada alam, ekologi, tanaman atau binatang." },
        { questionText: "Ketika dewasa, ingin pergi dari kota yang ramai ke tempat yang masih alamiah untuk menikmati alam." },
        { questionText: "Suka berkelana, hiking, atau sekedar jalan-jalan di alam terbuka." },
        { questionText: "Senang mempelajari nama-nama makhluk hidup di lingkungan, seperti bunga dan pohon." },
        { questionText: "Dalam berargumentasi, cenderung membandingkan lawan dengan seseorang atau sesuatu yang pernah dibaca atau dengar lalu bereaksi." },
        { questionText: "Jika sesuatu rusak dan tidak berfungsi, akan memperhatikan sekeliling untuk melihat apa yang bisa ditemukan untuk memperbaikinya." },
        { questionText: "Mampu mengerjakan dengan baik tugas / kegiatan yang berkaitan dengan sistem kehidupan (biologi, ilmu alam)." },
        { questionText: "Cukup fasih menjelaskan perbedaan jenis pohon atau jenis flora dan fauna." },
        { questionText: "Memiliki hewan peliharaan yang bermacam-macam atau setidaknya dua jenis hewan peliharaan dan mempunyai kebun." },
        { questionText: "Menyukai pembahasan tentang kehidupan." },
        { questionText: "Agama adalah hal yang penting." },
        { questionText: "Menikmati jika melihat karya seni." },
        { questionText: "Relaksasi dan meditasi latihan yang bermanfaat." },
        { questionText: "Suka mengunjungi situs alam." },
        { questionText: "Menikmati membaca filsuf kuno dan modern." },
        { questionText: "Belajar hal-hal baru lebih mudah ketika memahaminya." },
        { questionText: "Ingin mengetahui apakah ada bentuk-bentuk lain dari kehidupan di alam semesta." },
        { questionText: "Mempelajari sejarah dan budaya kuno membantu memberi suatu pandangan yang nyata." },
        { questionText: "Hobi membaca buku sejarah." },
        { questionText: "Cukup Fasih dalam menjelaskan budaya kuno." },
        { questionText: "Mempunyai minat cukup besar dalam mempelajari sejarah." }
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

  function getFinalResult(indexResult) {
    console.log(indexResult)
    for (let i = 0; i < indexResult.length; i++) {
      finalResult.value.push(indexResult[i])
    }
  }

  return { question, answer, finalResult, arrIntelegence, getTestJurusanQ, setInitA, setAnswer, getFinalResult }
})