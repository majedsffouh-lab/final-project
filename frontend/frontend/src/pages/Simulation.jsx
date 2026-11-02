import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Simulation() {
  const [selectedField, setSelectedField] = useState('');
  const [actionDone, setActionDone] = useState(false);

  // سيناريوهات المحاكاة البسيطة لكل تخصص
  const simulations = {
    cyber: {
      title: 'محاكاة الأمن السيبراني (اختبار اختراق وتحليل)',
      task: 'تم اكتشاف محاولة دخول غريبة للسيرفر. ما هو الإجراء الفوري الذي ستتخذه؟',
      options: [
        { text: 'فصل الاتصال عن الجهاز المصاب فوراً (Isolation)', correct: true },
        { text: 'تغيير خلفية الشاشة', correct: false }
      ]
    },
    ai: {
      title: 'محاكاة الذكاء الاصطناعي (تدريب نموذج بيانات)',
      task: 'لديك بيانات لصور قطط الكلاب، ماذا تحتاج أولاً لتدريب النموذج؟',
      options: [
        { text: 'تصنيف وتسمية البيانات (Data Labeling)', correct: true },
        { text: 'حذف البيانات وترك الجهاز', correct: false }
      ]
    },
    cs: {
      title: 'محاكاة علوم الحاسوب (حل مشكلة أداء الكود)',
      task: 'الكود يستهلك وقتاً طويلاً جداً في البحث داخل مليون سجل، ما الحل البرمجي المناسب؟',
      options: [
        { text: 'استخدام خوارزمية بحث أسرع مثل Binary Search', correct: true },
        { text: 'إغلاق المتصفح', correct: false }
      ]
    }
  };

  const handleChoice = (isCorrect) => {
    if (isCorrect) {
      alert('إجابة صحيحة! لقد نجحت في أداء هذه المهمة المهنية بنجاح.');
      setActionDone(true);
    } else {
      alert('إجابة خاطئة، حاول مرة أخرى.');
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '40px auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <Link to="/" style={{ textDecoration: 'none', color: '#0066cc' }}>← العودة للرئيسية</Link>
      <h2>محاكاة بيئة العمل الحقيقية لتخصصات الـ IT</h2>
      <p>اختر التخصص وجرب بنفسك المهام اليومية التي يقوم بها المختص في بيئة العمل:</p>

      {/* أزرار اختيار التخصص */}
      <div style={{ display: 'flex', gap: '10px', margin: '20px 0' }}>
        <button onClick={() => { setSelectedField('cyber'); setActionDone(false); }} style={{ padding: '8px 12px', background: selectedField === 'cyber' ? '#0066cc' : '#eee', color: selectedField === 'cyber' ? '#fff' : '#000', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>الأمن السيبراني</button>
        <button onClick={() => { setSelectedField('ai'); setActionDone(false); }} style={{ padding: '8px 12px', background: selectedField === 'ai' ? '#0066cc' : '#eee', color: selectedField === 'ai' ? '#fff' : '#000', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>الذكاء الاصطناعي</button>
        <button onClick={() => { setSelectedField('cs'); setActionDone(false); }} style={{ padding: '8px 12px', background: selectedField === 'cs' ? '#0066cc' : '#eee', color: selectedField === 'cs' ? '#fff' : '#000', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>علوم الحاسوب</button>
      </div>

      {/* عرض تفاصيل المحاكاة إذا تم اختيار تخصص */}
      {selectedField && (
        <div style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '8px', background: '#fafafa' }}>
          <h3>{simulations[selectedField].title}</h3>
          <p style={{ fontWeight: 'bold', marginTop: '10px' }}>المهمة: {simulations[selectedField].task}</p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '15px' }}>
            {simulations[selectedField].options.map((opt, index) => (
              <button 
                key={index} 
                onClick={() => handleChoice(opt.correct)}
                style={{ padding: '10px', background: '#fff', border: '1px solid #ccc', borderRadius: '4px', cursor: 'pointer', textAlign: 'right' }}
              >
                {opt.text}
              </button>
            ))}
          </div>

          {actionDone && <p style={{ color: 'green', marginTop: '15px', fontWeight: 'bold' }}>🎉 مبروك! لقد أتممت هذه التجربة بنجاح وتستحق العمل في هذا المجال.</p>}
        </div>
      )}
    </div>
  );
}

export default Simulation;