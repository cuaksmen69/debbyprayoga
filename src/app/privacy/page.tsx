'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Shield, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function Privacy() {
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
              <span className="text-blue-600 font-semibold">Privasi</span>
              <Link href="/terms" className="text-gray-700 hover:text-blue-600 transition-colors">Syarat & Ketentuan</Link>
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
              <span className="block px-3 py-2 text-blue-600 font-semibold">Privasi</span>
              <Link href="/terms" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Syarat & Ketentuan</Link>
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
            Kebijakan Privasi <span className="text-blue-600">DEBBY PRAYOGA</span>
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
                Selamat datang di DEBBY PRAYOGA. Kami adalah penyedia gas elpiji eceran yang berkomitmen untuk melindungi privasi dan keamanan data pribadi Anda. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda ketika menggunakan layanan kami.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Informasi yang Kami Kumpulkan</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">2.1 Informasi Pribadi</h3>
                  <p className="text-gray-600">
                    Kami dapat mengumpulkan informasi pribadi berikut:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                    <li>Nama lengkap</li>
                    <li>Nomor telepon</li>
                    <li>Alamat pengantaran</li>
                    <li>Email (jika disediakan)</li>
                    <li>Informasi pesanan gas elpiji</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">2.2 Informasi Penggunaan</h3>
                  <p className="text-gray-600">
                    Kami juga dapat mengumpulkan informasi tentang bagaimana Anda menggunakan layanan kami, termasuk:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                    <li>Riwayat pesanan</li>
                    <li>Preferensi jenis gas</li>
                    <li>Frekuensi pemesanan</li>
                    <li>Feedback dan ulasan</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Penggunaan Informasi</h2>
              <p className="text-gray-600 mb-4">
                Kami menggunakan informasi pribadi Anda untuk:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Memproses dan mengantarkan pesanan gas elpiji Anda</li>
                <li>Menghubungi Anda terkait status pesanan</li>
                <li>Menyediakan layanan pelanggan yang lebih baik</li>
                <li>Menginformasikan penawaran dan promosi terbaru</li>
                <li>Meningkatkan kualitas layanan kami</li>
                <li>Memastikan keamanan dan kepatuhan hukum</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Berbagi Informasi</h2>
              <p className="text-gray-600 mb-4">
                Kami tidak menjual, menyewakan, atau membagikan informasi pribadi Anda kepada pihak ketiga, kecuali dalam kondisi berikut:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Dengan persetujuan Anda yang jelas</li>
                <li>Untuk memenuhi persyaratan hukum atau perintah pengadilan</li>
                <li>Untuk melindungi hak, keamanan, atau properti kami</li>
                <li>Dengan mitra layanan pengantaran yang tepercaya</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Keamanan Data</h2>
              <p className="text-gray-600">
                DEBBY PRAYOGA berkomitmen untuk melindungi keamanan informasi pribadi Anda. Kami menerapkan langkah-langkah keamanan yang wajar termasuk:
              </p>
              <ul className="list-disc list-inside text-gray-600 mt-2 space-y-2">
                <li>Enkripsi data sensitif</li>
                <li>Akses terbatas kepada informasi pribadi</li>
                <li>Protokol keamanan untuk penyimpanan data</li>
                <li>Pelatihan reguler untuk staf tentang keamanan data</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Hak Anda</h2>
              <p className="text-gray-600 mb-4">
                Sebagai pengguna layanan kami, Anda memiliki hak untuk:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Mengakses informasi pribadi yang kami simpan tentang Anda</li>
                <li>Memperbaiki informasi yang tidak akurat</li>
                <li>Menghapus informasi pribadi Anda (dengan beberapa pengecualian)</li>
                <li>Menolak pemasaran langsung dari kami</li>
                <li>Meminta salinan data pribadi Anda</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Penyimpanan Data</h2>
              <p className="text-gray-600">
                Kami akan menyimpan informasi pribadi Anda hanya selama diperlukan untuk tujuan yang dikumpulkan, atau sesuai dengan persyaratan hukum yang berlaku. Setelah periode tersebut, kami akan menghapus atau menganonimkan data Anda.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Cookies dan Teknologi Pelacakan</h2>
              <p className="text-gray-600">
                Website kami mungkin menggunakan cookies untuk meningkatkan pengalaman pengguna. Cookies adalah file kecil yang disimpan di browser Anda. Anda dapat mengatur browser untuk menolak cookies, namun ini dapat mempengaruhi beberapa fitur website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Perubahan Kebijakan</h2>
              <p className="text-gray-600">
                DEBBY PRAYOGA dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Perubahan akan diberitahukan melalui website atau kontak langsung. Penggunaan layanan kami setelah perubahan berarti Anda menerima kebijakan yang diperbarui.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Kontak Kami</h2>
              <p className="text-gray-600 mb-4">
                Jika Anda memiliki pertanyaan atau kekhawatiran tentang Kebijakan Privasi ini, silakan hubungi kami:
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Persetujuan</h2>
              <p className="text-gray-600">
                Dengan menggunakan layanan DEBBY PRAYOGA, Anda menyatakan bahwa Anda telah membaca, memahami, dan menyetujui Kebijakan Privasi ini.
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