<template>
  <div class="hello">
    <h1 v-if="show">{{ msg }}</h1>
    <h1 v-else>Judul Disembunyikan</h1>

    <p>{{ nama }}</p>
    <p>{{ 'Poin Anda '+poin}}</p>
    <input type="text" v-model="nama">

    <button type="button" v-on:click="hideTitle">Click Me</button>
    <div v-for="(item,index) in items" :key="item.pertanyaan" :options="item.pertanyaan">
      <p>{{ item.pertanyaan}}</p>
      <div  v-for="pilih in item.pilihan" :key="pilih.pilihan" :options="pilih.pilihan">
        <input type="radio"  name="data['+index+']" 
         v-on:click="checkJawaban(index,pilih.pilihan)" 
        :value="pilih.pilihan" v-model="jawab">{{ pilih.pilihan }} 
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data: function(){
    return {
      nama: 'Aditia',
      show: true,
      poin:0,
      jawab:String,
      items:[
      {
        name:'soal1',
        pertanyaan: '1. Aku selalu membersihkan rumah dan diberi makan saat digunakan apakah aku ?',
        answer:String,
        check:true,
        pilihan:[
        { pilihan:'Sapu' },
        { pilihan:'Lap Pel' },
        { pilihan:'Penyedot Debu'},
        { pilihan:'Kemoceng' } ],
        jawaban:'Penyedot Debu'
      },
      {
        pertanyaan: '2. 2 + 2 - 2 + 2 =',
        name:'soal2',
        check:true,
        answer:String,
        pilihan:[
        {
          pilihan:'1'
        },
        {
          pilihan:'2'
        },
        {
          pilihan:'3'
        },
        {
          pilihan:'4'
        }
        ],
        jawaban:'4'
      },
      {
        pertanyaan: '3. Presiden pertama ?',
        answer:String,
        check:true,
        name:'soal3',
        pilihan:[
        {
          pilihan:'Jokowi'
        },
        {
          pilihan:'Ridwan Kamil'
        },
        {
          pilihan:'Ir.Soekarno'
        },
        {
          pilihan:'Soeharto'
        }
        ],
        jawaban:'Ir.Soekarno'
      }
      ]
    }
  },
  methods: {
    hideTitle () {
      this.show = !this.show
    },
    checkJawaban(i,jawab){
         if(this.items[i].jawaban === jawab){
          this.poin++;
        }
        this.items[i].check = false;
         
        
    }
  },
  mounted: function () {
    this.nama = 'Suwita'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
    