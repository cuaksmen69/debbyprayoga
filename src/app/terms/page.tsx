'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, FileText, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function Terms() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <img
                src="/logo.png"
                alt="DEBBY PRAYOGA Logo"
                className="h-12 w-auto"
              />
              <span className="ml-3 text-xl font-bold text-blue-900">DEBBY PRAYOGA</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">Beranda</Link>
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">Tentang</Link>
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">Layanan</Link>
              <Link href="/privacy" className="text-gray-700 hover:text-blue-600 transition-colors">Privasi</Link>
              <span className="text-blue-600 font-semibold">Syarat & Ketentuan</span>
              <Link href="/#contact" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Hubungi Kami
              </Link>
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Beranda</Link>
              <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Tentang</Link>
              <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Layanan</Link>
              <Link href="/privacy" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Privasi</Link>
              <span className="block px-3 py-2 text-blue-600 font-semibold">Syarat & Ketentuan</span>
              <Link href="/#contact" className="block px-3 py-2 bg-blue-600 text-white rounded-lg">Hubungi Kami</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Header */}
      <div className="bg-white py-12 border-b">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Kembali ke Beranda
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Syarat & Ketentuan <span className="text-blue-600">DEBBY PRAYOGA</span>
          </h1>
          <p className="text-gray-600 mt-2">
            Terakhir diperbarui: {new Date().toLocaleDateString('id-ID')}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Pendahuluan</h2>
              <p className="text-gray-600 leading-relaxed">
                Selamat datang di DEBBY PRAYOGA. Syarat dan Ketentuan ini mengatur penggunaan layanan gas elpiji yang kami sediakan. Dengan menggunakan layanan kami, Anda setuju untuk terikat oleh syarat dan ketentuan yang diuraikan di bawah ini.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Definisi</h2>
              <div className="space-y-2">
                <p className="text-gray-600"><strong>"Perusahaan"</strong> merujuk pada DEBBY PRAYOGA, penyedia gas elpiji eceran.</p>
                <p className="text-gray-600"><strong>"Pelanggan"</strong> merujuk pada individu atau entitas yang menggunakan layanan kami.</p>
                <p className="text-gray-600"><strong>"Layanan"</strong> merujuk pada penjualan dan pengantaran gas elpiji.</p>
                <p className="text-gray-600"><strong>"Produk"</strong> merujuk pada gas elpiji 3 kg, 12 kg, dan ukuran lainnya yang kami jual.</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Layanan Kami</h2>
              <p className="text-gray-600 mb-4">
                DEBBY PRAYOGA menyediakan layanan berikut:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Penjualan gas elpiji ukuran 3 kg dan 12 kg</li>
                <li>Layanan pengantaran langsung ke alamat pelanggan</li>
                <li>Konsultasi mengenai penggunaan gas elpiji yang aman</li>
                <li>Layanan pelanggan untuk pertanyaan dan keluhan</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Pemesanan dan Pembayaran</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">4.1 Pemesanan</h3>
                  <p className="text-gray-600">
                    Pemesanan dapat dilakukan melalui:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                    <li>Telepon: 085353876139</li>
                    <li>Langsung di lokasi kami</li>
                    <li>Formulir pemesanan online</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">4.2 Pembayaran</h3>
                  <p className="text-gray-600">
                    Pembayaran dapat dilakukan dengan:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                    <li>Tunai saat pengantaran</li>
                    <li>Transfer bank (jika tersedia)</li>
                    <li>E-wallet (jika tersedia)</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Pengantaran</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">5.1 Area Pengantaran</h3>
                  <p className="text-gray-600">
                    Kami melayani pengantaran di area:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                    <li>Kecamatan Pangkalan Baru dan sekitarnya</li>
                    <li>Kabupaten Bangka Tengah</li>
                    <li>Area lain dengan biaya tambahan (dikonfirmasi terlebih dahulu)</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">5.2 Waktu Pengantaran</h3>
                  <p className="text-gray-600">
                    Pengantaran dilakukan pada jam operasional:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                    <li>Setiap hari: 08:00 - 20:00</li>
                    <li>Pengantaran hari yang sama untuk pemesanan sebelum pukul 15:00</li>
                    <li>Pengantaran keesokan harinya untuk pemesanan setelah pukul 15:00</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Kewajiban Pelanggan</h2>
              <p className="text-gray-600 mb-4">
                Sebagai pelanggan, Anda setuju untuk:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Memberikan informasi yang akurat dan lengkap saat pemesanan</li>
                <li>Memastikan ada orang yang menerima pengantaran di alamat yang dituju</li>
                <li>Membayar sesuai dengan harga yang telah disepakati</li>
                <li>Menyimpan dan menggunakan gas elpiji sesuai dengan standar keamanan</li>
                <li>Memeriksa kondisi tabung gas saat menerima pengantaran</li>
                <li>Melaporkan masalah atau keluhan dalam waktu 24 jam</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Kewajiban Perusahaan</h2>
              <p className="text-gray-600 mb-4">
                DEBBY PRAYOGA berkomitmen untuk:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Menyediakan gas elpiji berkualitas dan aman</li>
                <li>Mengantarkan produk tepat waktu sesuai jadwal</li>
                <li>Memberikan harga yang kompetitif dan transparan</li>
                <li>Menyediakan layanan pelanggan yang responsif</li>
                <li>Memastikan keamanan produk yang dijual</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Harga dan Biaya</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">8.1 Harga Produk</h3>
                  <p className="text-gray-600">
                    Harga gas elpiji dapat berubah sesuai dengan:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                    <li>Harga pasar yang berlaku</li>
                    <li>Kebijakan pemerintah</li>
                    <li>Biaya operasional</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">8.2 Biaya Pengantaran</h3>
                  <p className="text-gray-600">
                    Biaya pengantaran:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                    <li>Gratis untuk area tertentu</li>
                    <li>Berlaku biaya tambahan untuk area jauh</li>
                    <li>Diskon untuk pembelian dalam jumlah besar</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Pembatalan dan Pengembalian</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">9.1 Pembatalan Pesanan</h3>
                  <p className="text-gray-600">
                    Pelanggan dapat membatalkan pesanan:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                    <li>Gratis jika dibatalkan 2 jam sebelum pengantaran</li>
                    <li>Dikenakan biaya pembatalan 50% jika kurang dari 2 jam</li>
                    <li>Tidak ada pengembalian jika produk sudah diantarkan</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">9.2 Pengembalian Produk</h3>
                  <p className="text-gray-600">
                    Pengembalian produk dapat dilakukan jika:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                    <li>Produk rusak atau cacat saat diterima</li>
                    <li>Produk tidak sesuai dengan pesanan</li>
                    <li>Ada masalah keamanan pada tabung gas</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Keamanan</h2>
              <p className="text-gray-600 mb-4">
                Keamanan penggunaan gas elpiji adalah tanggung jawab bersama:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Pelanggan bertanggung jawab atas penggunaan gas elpiji yang aman</li>
                <li>Perusahaan tidak bertanggung jawab atas kecelakaan akibat kesalahan penggunaan</li>
                <li>Kami menyediakan informasi keamanan dan panduan penggunaan</li>
                <li>Harap segera melaporkan jika mencurigai kebocoran gas</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Pembatasan Tanggung Jawab</h2>
              <p className="text-gray-600">
                DEBBY PRAYOGA tidak bertanggung jawab atas:
              </p>
              <ul className="list-disc list-inside text-gray-600 mt-2 space-y-2">
                <li>Kerugian tidak langsung atau konsekuensial</li>
                <li>Keterlambatan pengantaran di luar kendali kami</li>
                <li>Kerusakan akibat penggunaan yang tidak benar</li>
                <li>Kehilangan atau kerusakan setelah produk diterima pelanggan</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Hak Kekayaan Intelektual</h2>
              <p className="text-gray-600">
                Semua konten, logo, dan materi milik DEBBY PRAYOGA dilindungi oleh hak kekayaan intelektual. Penggunaan tanpa izin dilarang.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Perubahan Syarat dan Ketentuan</h2>
              <p className="text-gray-600">
                DEBBY PRAYOGA berhak mengubah syarat dan ketentuan ini sewaktu-waktu. Perubahan akan diberitahukan melalui website atau kontak langsung. Penggunaan layanan setelah perubahan berarti Anda menerima syarat yang diperbarui.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Sengketa</h2>
              <p className="text-gray-600">
                Setiap sengketa yang timbul dari penggunaan layanan kami akan diselesaikan secara musyawarah terlebih dahulu. Jika tidak mencapai kesepakatan, sengketa akan diselesaikan melalui peradilan yang berwenang di wilayah Bangka Tengah.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">15. Kontak Kami</h2>
              <p className="text-gray-600 mb-4">
                Jika Anda memiliki pertanyaan tentang Syarat dan Ketentuan ini, silakan hubungi kami:
              </p>
              <div className="bg-blue-50 rounded-lg p-4 space-y-2">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">085353876139</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">PERUMAHAN MANGKOL ASRI BLOK A NOMOR 1, Desa Mangkol, Kec. Pangkalan Baru, Kab. Bangka Tengah, Prov. Kepulauan Bangka Belitung, 33684</span>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">16. Persetujuan</h2>
              <p className="text-gray-600">
                Dengan menggunakan layanan DEBBY PRAYOGA, Anda menyatakan bahwa Anda telah membaca, memahami, dan menyetujui Syarat dan Ketentuan ini.
              </p>
            </section>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <img src="/logo.png" alt="DEBBY PRAYOGA Logo" className="h-10 w-auto mr-3" />
                <span className="text-xl font-bold">DEBBY PRAYOGA</span>
              </div>
              <p className="text-gray-400">
                Penyedia gas elpiji terpercaya di Bangka Tengah
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Gas 3 Kg</li>
                <li>Gas 12 Kg</li>
                <li>Pengantaran Langsung</li>
                <li>Konsultasi</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Perusahaan</h4>
              <ul className="space-y-2">
                <li><a href="/privacy" className="text-gray-400 hover:text-white transition-colors">Kebijakan Privasi</a></li>
                <li><a href="/terms" className="text-gray-400 hover:text-white transition-colors">Syarat & Ketentuan</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Kontak</h4>
              <ul className="space-y-2 text-gray-400">
                <li>085353876139</li>
                <li>Mangkol, Pangkalan Baru</li>
                <li>Bangka Tengah, 33684</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 DEBBY PRAYOGA. Hak Cipta Dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}