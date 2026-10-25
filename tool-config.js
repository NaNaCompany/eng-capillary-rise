export const tool={
  "id": "E080",
  "slug": "eng-capillary-rise",
  "title": "모세관 상승높이 계산기",
  "title_en": "Capillary Rise Calculator",
  "category": "유체",
  "category_en": "Fluid mechanics",
  "fields": [
    {
      "key": "sigma",
      "label": "표면장력 σ",
      "label_en": "Surface tension σ",
      "dimension": "surfaceTension",
      "example": 0.072,
      "constraint": "positive",
      "display_unit": "Nm",
      "display_value": "0.072"
    },
    {
      "key": "theta",
      "label": "액체 쪽 접촉각 θ",
      "label_en": "Contact angle through the liquid θ",
      "dimension": "angle",
      "example": 0,
      "constraint": "signed",
      "display_unit": "deg",
      "display_value": "0"
    },
    {
      "key": "rho",
      "label": "액체 밀도 ρ",
      "label_en": "Liquid density ρ",
      "dimension": "density",
      "example": 1000,
      "constraint": "positive",
      "display_unit": "kgm3",
      "display_value": "1000"
    },
    {
      "key": "g",
      "label": "중력가속도 g",
      "label_en": "Gravitational acceleration g",
      "dimension": "acceleration",
      "example": 10,
      "constraint": "positive",
      "display_unit": "ms2",
      "display_value": "10"
    },
    {
      "key": "r",
      "label": "모세관 내반경 r",
      "label_en": "Capillary inside radius r",
      "dimension": "length",
      "example": 0.001,
      "constraint": "positive",
      "display_unit": "mm",
      "display_value": "1"
    }
  ],
  "result_label": "모세관 높이 변화 h",
  "result_label_en": "Capillary height change h",
  "result_dimension": "length",
  "formula": "h = 2σ cosθ/(ρgr)",
  "purpose": "원형 모세관의 정적 액면 상승 또는 하강 계산",
  "purpose_en": "Calculate static rise or depression in a circular capillary.",
  "assumptions": "σ,ρ,g,r>0, 0≤θ≤180°. 기체 밀도와 메니스커스 부피를 무시하는 가는 원관 모델이다. θ는 액체 쪽 접촉각이며 비젖음 조건의 하강은 음수다.",
  "assumptions_en": "Required: σ,ρ,g,r>0 and 0≤θ≤180°. Thin circular capillary with negligible gas density and meniscus volume. θ is measured through the liquid; nonwetting depression is negative.",
  "sources": [
    {
      "label": "OpenStax · 11.8 · Surface Tension and Capillary Action",
      "url": "https://openstax.org/books/college-physics-2e/pages/11-8-cohesion-and-adhesion-in-liquids-surface-tension-and-capillary-action"
    }
  ],
  "condition": "",
  "condition_en": "",
  "site": "https://nanalab.kr/eng-capillary-rise/",
  "repository": "https://github.com/NaNaCompany/eng-capillary-rise",
  "output_unit": "m"
};
