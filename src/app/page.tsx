'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Shield, Truck, Users, Zap } from 'lucide-react';

export default function Home() {
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
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Beranda</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">Tentang</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Layanan</a>
              <a href="/privacy" className="text-gray-700 hover:text-blue-600 transition-colors">Privasi</a>
              <a href="/terms" className="text-gray-700 hover:text-blue-600 transition-colors">Syarat & Ketentuan</a>
              <a href="#contact" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Hubungi Kami
              </a>
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
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Beranda</a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Tentang</a>
              <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Layanan</a>
              <a href="/privacy" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Privasi</a>
              <a href="/terms" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Syarat & Ketentuan</a>
              <a href="#contact" className="block px-3 py-2 bg-blue-600 text-white rounded-lg">Hubungi Kami</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                <span className="text-blue-600">DEBBY PRAYOGA</span>
                <br />
                Gas Elpiji Terpercaya
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Penyedia gas elpiji eceran terpercaya di Bangka Tengah. 
                Melayani kebutuhan gas elpiji untuk rumah tangga dan usaha Anda dengan aman dan terjangkau.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-center font-semibold">
                  Pesan Sekarang
                </a>
                <a href="#services" className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors text-center font-semibold">
                  Lihat Layanan
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="text-center">
                  <div className="bg-gradient-to-br from-blue-100 to-orange-100 rounded-xl p-6 mb-6">
                    <Zap className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Gas Elpiji Berkualitas</h3>
                    <p className="text-gray-600">Aman, Terpercaya, dan Harga Terjangkau</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tentang <span className="text-blue-600">DEBBY PRAYOGA</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kami adalah penyedia gas elpiji eceran yang berkomitmen untuk memberikan layanan terbaik 
              kepada masyarakat Bangka Tengah dan sekitarnya.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Aman & Terpercaya</h3>
              <p className="text-gray-600">Produk gas elpiji berkualitas dengan standar keamanan tinggi</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-orange-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Truck className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Pengantaran Cepat</h3>
              <p className="text-gray-600">Layanan pengantaran gas elpiji langsung ke lokasi Anda</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Pelayanan Prima</h3>
              <p className="text-gray-600">Tim profesional yang siap melayani kebutuhan Anda</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Layanan Kami
            </h2>
            <p className="text-xl text-gray-600">
              Berbagai layanan gas elpiji untuk memenuhi kebutuhan Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 rounded-lg p-3 w-12 h-12 mb-4 flex items-center justify-center">
                <Zap className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Gas 3 Kg</h3>
              <p className="text-gray-600">Gas elpiji ukuran 3 kg untuk kebutuhan rumah tangga</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="bg-orange-100 rounded-lg p-3 w-12 h-12 mb-4 flex items-center justify-center">
                <Zap className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Gas 12 Kg</h3>
              <p className="text-gray-600">Gas elpiji ukuran 12 kg untuk kebutuhan usaha</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="bg-green-100 rounded-lg p-3 w-12 h-12 mb-4 flex items-center justify-center">
                <Truck className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Antar Langsung</h3>
              <p className="text-gray-600">Layanan pengantaran langsung ke alamat Anda</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="bg-purple-100 rounded-lg p-3 w-12 h-12 mb-4 flex items-center justify-center">
                <Clock className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Buka Setiap Hari</h3>
              <p className="text-gray-600">Layanan tersedia setiap hari untuk kebutuhan Anda</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Hubungi Kami
            </h2>
            <p className="text-xl text-gray-600">
              Siap melayani kebutuhan gas elpiji Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Informasi Kontak</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="bg-blue-100 rounded-full p-3 mr-4">
                      <Phone className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold">Telepon</p>
                      <p className="text-gray-600">085353876139</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="bg-orange-100 rounded-full p-3 mr-4">
                      <MapPin className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <p className="font-semibold">Alamat</p>
                      <p className="text-gray-600">
                        PERUMAHAN MANGKOL ASRI BLOK A NOMOR 1, Desa Mangkol, Kec. Pangkalan Baru, Kab. Bangka Tengah, Prov. Kepulauan Bangka Belitung, 33684
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="bg-green-100 rounded-full p-3 mr-4">
                      <Clock className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold">Jam Operasional</p>
                      <p className="text-gray-600">Setiap Hari: 08:00 - 20:00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Pesan Gas Sekarang</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap</label>
                    <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Masukkan nama Anda" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nomor Telepon</label>
                    <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Masukkan nomor telepon" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Jenis Gas</label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>Pilih jenis gas</option>
                      <option>Gas 3 Kg</option>
                      <option>Gas 12 Kg</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Jumlah</label>
                    <input type="number" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Masukkan jumlah" min="1" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Alamat Pengantaran</label>
                    <textarea className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" rows={3} placeholder="Masukkan alamat lengkap"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                    Pesan Sekarang
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

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