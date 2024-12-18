import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Hero Section */}
        <div className="relative h-[500px] rounded-2xl overflow-hidden mb-12">
          <div className="absolute inset-0 bg-blue-900/60 z-10" />
          <Image
            src="/logoLDEDU.png"
            alt="Trường Đại học Lao động - Xã hội Cơ sở II"
            fill
            className="object-cover"
          />
          <div className="relative z-20 h-full flex flex-col justify-center items-center text-white p-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Trường Đại học Lao động - Xã hội
            </h1>
            <p className="text-2xl md:text-3xl">Cơ sở II - TP.HCM</p>
            <p className="text-xl md:text-2xl italic mt-4">
              &ldquo;Đào tạo - Nghiên cứu - Phát triển nguồn nhân lực chất lượng cao&rdquo;
            </p>
          </div>
        </div>

        {/* Thông báo đang xây dựng */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="bg-yellow-100 border-2 border-yellow-400 p-6 rounded-xl text-center">
            <h3 className="text-2xl font-bold text-yellow-800 mb-2">🚧 Thông báo 🚧</h3>
            <p className="text-lg text-yellow-700 mb-1">Trang web đang trong quá trình xây dựng</p>
            <p className="text-yellow-600">Coming soon...</p>
          </div>
        </div>

        {/* Giới thiệu và Ngành đào tạo */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Về chúng tôi</h2>
            <p className="text-gray-600 leading-relaxed">
              Cơ sở II của trường Đại học Lao động - Xã hội tọa lạc tại TP.HCM, 
              là đơn vị đào tạo uy tín trong lĩnh vực lao động, xã hội, giáo dục 
              và phát triển nguồn nhân lực tại khu vực phía Nam.
            </p>
          </div>

          <div className="bg-blue-50 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Ngành đào tạo</h2>
            <ul className="space-y-3 text-gray-600">
              <li>📚 Quản trị kinh doanh</li>
              <li>📊 Kế toán</li>
              <li>👥 Công tác xã hội</li>
              <li>🎓 Giáo dục học</li>
              <li>💼 Kinh tế lao động</li>
              <li>🧠 Tâm lý học</li>
            </ul>
          </div>
        </div>

        {/* Đặc điểm nổi bật */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl p-8 mb-12 text-white">
          <h2 className="text-3xl font-bold mb-6">Đặc điểm nổi bật</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Chất lượng đào tạo</h3>
              <p>Đào tạo nguồn nhân lực chất lượng cao, đáp ứng yêu cầu phát triển của xã hội</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Cơ sở vật chất</h3>
              <p>Trang thiết bị hiện đại phục vụ học tập và nghiên cứu</p>
            </div>
          </div>
        </div>

        {/* Liên hệ */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Thông tin liên hệ</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 text-gray-600">
              <p className="flex items-center gap-3">
                <span className="text-2xl">📍</span>
                1018 Tô Ký, Phường Tân Chánh Hiệp, Quận 12, TP.HCM
              </p>
              <p className="flex items-center gap-3">
                <span className="text-2xl">📧</span>
                Hotline: 028.3883.7801 (108, 109)
              </p>
              <p className="flex items-center gap-3">
                <span className="text-2xl">📞</span>
                028.3883.7218 (101, 102, 105, 108)
              </p>
          
            </div>
            <div>
              <div className="bg-blue-100 p-4 rounded-xl text-blue-800">
                <p className="font-semibold">Phòng Quản lý đào tạo - CSII</p>
                <p className="text-sm mt-2">Trang web đang được xây dựng</p>
                <p className="text-sm">Coming soon...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}