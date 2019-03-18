<template>
  <form>
    <div>
      <label>NIS</label>
      <input type="text" name="nis" placeholder="Masukan NIS" />

      <label>Nama Lengkap :</label>
      <input type="text" name="nama_lengkap" placeholder="Masukan Nama Lengkap" />

      <label>Jenis Kelamin :</label>
      <label><input type="radio" name="jenis_kelamin" value="L"/> L </label>
      <label><input type="radio" name="jenis_kelamin" value="P"/> P </label>

      <label>Alamat :</label>
      <textarea type="text" name="alamat" placeholder="Masukan Alamat Lengkap">
      </textarea>

      <label>No Telp :</label>
      <input type="text" name="no_telp" placeholder="Masukan Nomor Telepon" />

      <label>Kelas</label>
      <select>
        <option>
        </option>
        </select>

      <button type="submit">Simpan </button>
    </div>
  </form>
</template>

<script>
  export default {

  }
</script>
