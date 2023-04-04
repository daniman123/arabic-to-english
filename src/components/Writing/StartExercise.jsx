const StartExercise = ({ startExercise }) => {
  return (
    <div className="writingExercise">
      <p className="writing__instr">
        تمرين ملء الفراغات هو نوع من التمارين التعليمية التي يتم فيها تقديم
        عبارة أو جملة مع كلمة واحدة أو أكثر مفقودة. يجب على المستخدم ملء
        المسافات المفقودة عن طريق كتابة الكلمات المناسبة في المساحات الفارغة
        الموجودة. يتم استبدال المساحات الفارغة بالأرقام ، ثم عليك النقر فوق
        الكلمة المفقودة الصحيحة تحت الرقم المقابل لها. يستخدم هذا النوع من
        التمارين عادة لاختبار معرفة الشخص وفهمه لموضوع معين. لبدء التمرين ، يرجى
        <br></br>
        <br></br>
        ."Start Exercise" النقر على الزر الذي يقول
      </p>
      <button className="start-exercise" onClick={startExercise}>
        Start Exercise
      </button>
    </div>
  );
};

export default StartExercise;
