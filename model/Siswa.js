import mongoose from 'mongoose'

const siswaSchema = new mongoose.Schema({
    nis: {
        type: String,
        unique: true,
        required: [true, "Input NIS terlebih anda dahulu"]
    },
    namalengkap: {
        type: String,
        unique: true,
        required: [true, "Input Nama Lengkap anda terlebih dahulu"]
    },
    namapanggilan: {
        type: String,
        unique: true,
        required: [true, "Input Nama Panggilan anda terlebih dahulu"]
    },
    email: {
        type: String,
        unique: true,
        required: [true, "Isikan Email terlebih dahulu"],
        match: [
			/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
			"Gunakan email yang valid",
		],
    },
    kelas: {
        type: String,
        required: [true, "Input nomor Kelas terlebih dahulu"]
    },
    absen: {
        type: String,
        required: [true, "Masukan Nomor Absen terlebih dahulu"]
    },
    gender: {
        type: String,
        required: [true, "Masukan Gender anda terlebih dahulu"]
    },
})

export default mongoose.model("siswas", siswaSchema)