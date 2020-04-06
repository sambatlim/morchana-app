export const dataInputTable: DataInput[] = [
  {
    id: 'one_uri_symp',
    name: 'data:covid:one_uri_symp',
    title: 'ท่านมีอาการดังต่อไปนี้หรือไม่ ?',
    subtitle: 'กรุณาเลือกอาการที่ตรงกับคุณ',
    dataType: 'String',
    inputType: 'MuliSelect',
    defaultValue: [],
    options: [
      { label: 'มีไข้สูง 37.5 องศาขึ้นไป', value: 'fever' },
      { label: 'ไอ', value: 'one_uri_symp_1' },
      { label: 'เจ็บคอ', value: 'one_uri_symp_2' },
      { label: 'เหนื่อยหอบผิดปกติ', value: 'one_uri_symp_3' },
      { label: 'อาเจียน', value: 'one_uri_symp_4' },
      { label: 'ไม่มีอาการใด ๆ ข้างต้น', value: 'none', clearOther: true },
    ],
  },
  {
    id: 'travel_risk_country',
    title: 'เดินทางไปต่างประเทศ',
    subtitle: 'คุณได้เดินทางไปต่างประเทศในช่วง 14 วันก่อน ?',
    name: 'data:travel:travel_risk_country',
    dataType: 'Boolean',
    inputType: 'Select',
    options: [
      { label: 'ได้ไปต่างประเทศ', value: true },
      { label: 'ไม่ได้ไปต่างประเทศ', value: false },
    ],
  },
  {
    id: 'covid19_contact',
    title: 'อยู่ใกล้ชิดคนที่มีความเสี่ยง',
    subtitle: 'คุณได้อยู่ใกล้ชิดกับคนที่มีความเสี่ยงในช่วง 14 วันก่อน ?',
    name: 'data:community:covid19_contact',
    dataType: 'Boolean',
    inputType: 'MuliSelect',
    defaultValue: [],
    options: [
      {
        label: 'มีผู้ใกล้ชิดป่วยเป็นไข้หวัดพร้อมกัน มากกว่า 5 คน',
        value: 'close_con',
      },
      {
        label: 'มีบุคคลในบ้านเดินทางไปต่างประเทศ',
        value: 'close_risk_country',
      },
      {
        label:
          'อยู่ใกล้ชิดกับผู้ป่วยยืนยัน COVID-19 (ใกล้กว่า 1 เมตร นานเกิน 5 นาที)',
        value: 'covid19_contact',
      },
      { label: 'ไม่มีประวัติข้างต้น', value: 'none', clearOther: true },
    ],
  },
  {
    id: 'int_contact',
    title: 'ประกอบอาชีพ',
    subtitle: 'คุณได้ประกอบอาชีพที่ใกล้ชิดกับชาวต่างชาติ ?',
    name: 'data:community:int_contact',
    dataType: 'Boolean',
    inputType: 'Select',
    options: [
      { label: 'ใช่', value: true },
      { label: 'ไม่ใช่', value: false },
    ],
  },
  // {
  //   id: 'med_prof',
  //   title: 'เป็นบุคลากรทางการแพทย์',
  //   subtitle: 'คุณเป็นเป็นบุคลากรทางการแพทย์ ?',
  //   name: 'data:community:med_prof',
  //   dataType: 'Boolean',
  //   inputType: 'Select',
  //   options: [
  //     { label: 'ใช่', value: true },
  //     { label: 'ไม่ใช่', value: false },
  //   ],
  // }
]