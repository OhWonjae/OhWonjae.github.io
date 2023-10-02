module.exports = {
  extends: "stylelint-config-standard-scss",
  plugins: ["stylelint-scss", "stylelint-order"],
  rules: {
    "order/properties-alphabetical-order": true, // 알파벳 정렬
    "no-eol-whitespace": true, // 줄 끝, 닫는 중괄호 뒤 공백 허용 여부
    "color-hex-length": "long", // 16진수 색상에 대해 표기법 지정
    "declaration-block-trailing-semicolon": "always", // 선언 블록 내 후행 세미콜론을 요구
    "font-family-no-duplicate-names": true, // 중복 폰트 선언 여부
    "declaration-block-no-duplicate-properties": true, // 같은 선언 내 중복 속성 선언 여부
    "declaration-block-no-duplicate-custom-properties": true, // 같은 선언 내 중복 사용자 속성 선언 여부
    "no-duplicate-at-import-rules": true, // 중복 @import 규칙을 허용 여부
    "media-query-list-comma-newline-after": "always", // 미디어 쿼리 목록 쉼표 뒤 줄 바꿈이나 공백
    // 개행
    "rule-empty-line-before": "always-multi-line", // 규칙 앞에 빈줄 속성
    "block-opening-brace-newline-before": "never-single-line", // 여는 중괄호 앞 (선택자와 괄호 사이)
    "block-opening-brace-newline-after": "always", // 여는 중괄호 다음 개행
    "block-closing-brace-newline-after": "always", // 닫는 중괄호 뒤
    "block-closing-brace-newline-before": "always", // 닫는 중괄호 앞
    "block-opening-brace-space-before": "always", // 여는 중괄호 앞
  },
}