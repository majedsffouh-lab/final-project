import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home=()=> {
  // 1. مصفوفة لتخزين التخصصات التي سنستقبلها من السيرفر
  const [specialties, setSpecialties] = useState([]);
  const [loading, setLoading] = useState(true);

  // 2. جلب البيانات تلقائياً بمجرد فتح الصفحة
  useEffect(() => {
    axios.get('http://localhost:5000/api/specialties')
      .then((response) => {
        setSpecialties(response.data); // حفظ التخصصات في المتغير
        setLoading(false); // انتهاء التحميل
      })
      .catch((error) => {
        console.log('Error fetching specialties:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      {/* شريط علوي بسيط */}
      <header style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px' }}>
        <h1>منصة تخصصات الـ IT الأكاديمية</h1>
        <div>
          <Link to="/login" style={{ marginRight: '15px', textDecoration: 'none', color: '#0066cc' }}>تسجيل الدخول</Link>
          <Link to="/register" style={{ textDecoration: 'none', color: '#0066cc' }}>حساب جديد</Link>
        </div>
      </header>

      {/* قسم الترحيب بالفكرة */}
      <section style={{ backgroundColor: '#f4f4f4', padding: '20px', borderRadius: '8px', marginBottom: '30px' }}>
        <h2>اكتشف مستقبلك في عالم تكنولوجيا المعلومات</h2>
        <p>تصفح تخصصات علوم الحاسوب، الأمن السيبراني، الذكاء الاصطناعي، وهندسة البرمجيات، وجرب محاكاة بيئة العمل قبل اختيار تخصصك!</p>
      </section>

      {/* عرض التخصصات */}
      <h3>التخصصات المتاحة حالياً:</h3>
      
      {loading ? (
        <p>جاري تحميل البيانات...</p>
      ) : specialties.length === 0 ? (
        <p>لا توجد تخصصات مضافة حتى الآن (قم بإضافتها من لوحة الأدمن).</p>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
          {specialties.map((spec) => (
            <div key={spec._id} style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px', backgroundColor: '#fff' }}>
              <h3>{spec.title}</h3>
              <p>{spec.description}</p>
              <hr style={{ border: '0', borderTop: '1px solid #eee', margin: '10px 0' }} />
              <p><strong>التأسيس:</strong> {spec.foundations.substring(0, 50)}...</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;