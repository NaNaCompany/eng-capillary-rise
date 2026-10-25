# 모세관 상승높이 계산기

원형 모세관의 정적 액면 상승 또는 하강 계산

- Plan ID: E080
- App: https://nanalab.kr/eng-capillary-rise/
- Repository: https://github.com/NaNaCompany/eng-capillary-rise
- Formula: `h = 2σ cosθ/(ρgr)`
- Output: 모세관 높이 변화 h

## Model

σ,ρ,g,r>0, 0≤θ≤180°. 기체 밀도와 메니스커스 부피를 무시하는 가는 원관 모델이다. θ는 액체 쪽 접촉각이며 비젖음 조건의 하강은 음수다.

Inputs are normalized to SI. Only one scalar is returned. Model conditions, finite numbers, physical boundaries, overflow and underflow are checked. External solver APIs and property databases are not used.

## Verification

Run `node --test tests/*.test.mjs` with Node.js 22 or later. Independent 70-digit Decimal example result: `0.0144`. Source and license notices are in [SOURCES.md](SOURCES.md) and [LICENSE](LICENSE).

## Hosting

GitHub Pages uses `main` and `/`, with the NaNaCompany domain inherited. Google GTM, GA4, AdSense, Cloudflare analytics and the gray More Apps link are included. All code, descriptions and graphics are original.

## Static languages

Korean (existing root), English (`en/`), Spanish (`es/`), Simplified Chinese (`zh/`), Japanese (`ja/`) and German (`de/`). Each page has its own canonical URL, reciprocal hreflang, localized metadata, interface, validation messages and preview image. The language links work without JavaScript. Calculation code is shared and no runtime translation API is used.

Edit `localization/*.json` for text, `src/template.html` for the shared page, and run `python scripts/build-locales.py`. Run `python scripts/build-locales.py --check` and `npm test` before publishing. Decimal commas are accepted in Spanish and German; thousands separators are not supported.
