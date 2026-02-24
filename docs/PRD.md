# 기프티허브 시스템 PRD (Product Requirements Document)

---

## 0. 앱 소개 (디자이너 전달용)

### 0.1 기프티허브(GiftiHub)란?

**기프티허브**는 QR코드 기반의 디지털 기프티(상품권) 플랫폼입니다.

사용자는 앱에서 기프티를 구매하고, QR코드를 제시하여 가맹점에서 사용합니다. 사용하지 않은 기프티는 다른 사용자에게 양도하거나, 중고마켓에서 직접 가격을 정해 판매할 수 있습니다. 가맹점은 같은 앱을 설치하되, 가맹점 계정으로 가입하면 QR 스캔 및 정산 전용 화면이 제공됩니다.

- **앱 형태**: React Native 단일 앱 (iOS/Android 통합)
- **계정 분리**: 하나의 앱 안에서 사용자(User) / 가맹점(Merchant) 화면이 완전히 분리됨
- **핵심 결제**: PayPal, SmileyPay (동남아권) / USDT는 보조 수단
- **기본 통화**: USD (현지 통화는 참고 환율로 병기, 예: ₩62,325)
- **QR코드**: 암호화된 바이너리 기반, 사용 시마다 자동 갱신되어 보안 유지

### 0.2 사용자(User) 화면 흐름

> 하단 탭: `[ 홈 ] [ 중고마켓 ] [ 내 기프티 ] [ 사용내역 ] [ 마이페이지 ]`
> 와이어프레임 참조: `WIREFRAMES.md` 내 섹션 번호 `WF X.X`

#### 공통 진입

| 단계 | 화면 | WF | 설명 |
|------|------|-----|------|
| 앱 실행 | 스플래시 | WF 1.1 | 로고 + OTA 업데이트 확인 |
| 로그인 | 로그인 | WF 1.2 | 이메일/비밀번호 입력 |
| 회원가입 | 타입 선택 | WF 1.3 | 사용자 or 가맹점 선택 |
| 회원가입 | 사용자 정보 입력 | WF 1.4 | 이름, 이메일, 비밀번호, 지갑주소(선택) |

#### 홈 탭

| 단계 | 화면 | WF | 설명 |
|------|------|-----|------|
| 메인 | 홈 | WF 2.1 | 보유 기프티 잔액 합계, 기프티 목록, 스토어 바로가기 |
| 구매 | 기프티 스토어 | WF 2.2 | 패키지 상품(1K~50K USD) 그리드 + 가맹점별 기프티 카테고리 |
| 구매 | 기프티 구매 | WF 2.3 | 상품 정보 확인, 수량 선택, 결제 수단 선택(PayPal/SmileyPay/USDT) |
| 결제 | 결제 진행 | WF 2.4 | PayPal/SmileyPay 결제 페이지 이동, 결제 확인 대기 |

#### 기프티 관리

| 단계 | 화면 | WF | 설명 |
|------|------|-----|------|
| 상세 | 기프티 상세 | WF 2.5 | QR코드 표시, 잔액 바, 만료일, 사용이력. 양도/환불/판매등록/QR재발급 진입점 |
| 양도 | 수신자 검색 | WF 2.6 | 이메일로 수신자 검색 |
| 양도 | 양도 확인 | WF 2.6.1 | 수신자 확인 + 메시지 입력 |
| 양도 | 양도 완료 | WF 2.6.2 | 완료 안내 |
| 환불 | 환불 요청 | WF 2.7 | 원결제 수단으로 환불, 관리자 승인 후 처리 |

#### 중고마켓 탭

| 단계 | 화면 | WF | 설명 |
|------|------|-----|------|
| 목록 | 중고마켓 목록 | WF 2.10 | 검색, 카테고리 필터, 정렬(최신순), 판매 중인 기프티 리스트 |
| 상세 | 중고 상품 상세 | WF 2.11 | 액면가, 판매가, 판매자(마스킹), 결제 금액(USD+현지통화), 구매 버튼 |
| 구매 | 중고 구매 결제 | WF 2.14 | 결제 수단 선택(PayPal/SmileyPay/USDT), 결제 확인 대기 |
| 완료 | 중고 구매 완료 | WF 2.15 | 구매 완료 안내, 내 기프티에 추가됨 확인 |
| 판매 | 판매 등록 | WF 2.12 | 판매 가격(USD) 입력, 수수료(5%) 미리보기, 수령액 확인 |
| 판매 | 판매 등록 확인 팝업 | WF 2.16 | 최종 확인 (판매 중 사용/양도/환불 잠금 안내) |
| 판매 | 판매 취소 확인 팝업 | WF 2.17 | 취소 시 기프티 다시 사용 가능 안내 |
| 내역 | 내 판매/구매 내역 | WF 2.13 | 판매 탭(판매중/완료/취소) + 구매 탭(구매완료) |

#### 기타 탭

| 단계 | 화면 | WF | 설명 |
|------|------|-----|------|
| 내역 | 사용 내역 | WF 2.8 | 필터별 조회(전체/구매/사용/양도/환불/중고거래), 날짜순 거래 목록 |
| 설정 | 마이페이지 | WF 2.9 | 프로필, 지갑 주소 관리, 비밀번호 변경, 알림 설정, 로그아웃 |

#### 주요 팝업

| 화면 | WF | 설명 |
|------|-----|------|
| 양도 확인 팝업 | WF 4.1 | 수신자 정보 + 양도 불가역 경고 |
| QR 재발급 확인 | WF 4.3 | 기존 QR 무효화 + 새 QR 발급 안내 |

---

### 0.3 가맹점(Merchant) 화면 흐름

> 하단 탭: `[ QR스캔 ] [ 사용처리 ] [ 사용내역 ] [ 정산 ] [ 설정 ]`

#### 공통 진입

| 단계 | 화면 | WF | 설명 |
|------|------|-----|------|
| 회원가입 | 가맹점 정보 입력 | WF 1.5 | 가맹점명, 업종, 대표자, 이메일, 연락처, 주소, 정산 지갑 |
| 승인대기 | 승인 대기 팝업 | WF 4.4 | 관리자 승인 후 이용 가능 안내 |

#### QR 스캔 → 사용 처리

| 단계 | 화면 | WF | 설명 |
|------|------|-----|------|
| 스캔 | QR 스캔 (홈) | WF 3.1 | 카메라로 고객 QR 스캔, 오늘 사용 처리 건수/금액 요약 |
| 처리 | 사용 처리 | WF 3.2 | QR 검증 완료 → 기프티 정보 표시, 일부/전액 사용 선택, 금액 입력(숫자 키패드) |
| 확인 | 사용 처리 확인 팝업 | WF 4.2 | 사용 금액, 처리 후 잔액, 고객 정보 최종 확인 |
| 완료 | 사용 처리 완료 | WF 3.3 | 처리 결과 요약, 다음 스캔 또는 실결제 입력으로 이동 |

#### 정산 관리

| 단계 | 화면 | WF | 설명 |
|------|------|-----|------|
| 내역 | 사용 내역 | WF 3.4 | 기간별(일/월) 사용 처리 이력 조회 |
| 정산 | 정산 | WF 3.5 | 이번 달 정산 현황(총 사용처리/실결제 입력/미입력), 실결제 기록 목록 |
| 입력 | 실결제 내역 입력 | WF 3.6 | 거래 연결, 결제 수단(현금/계좌이체/암호화폐/기타), 법정화폐 금액, 참고 환율 |
| 설정 | 가맹점 설정 | WF 3.7 | 가맹점 정보 수정, 정산 지갑 변경, 비밀번호/알림, 로그아웃 |

---

## 1. 프로젝트 개요

QR코드 기반의 디지털 기프티 발행, 판매, 사용, 관리를 위한 통합 플랫폼. 프로젝트명: **기프티허브(GiftiHub)**.
PayPal, SmileyPay를 기본 결제 수단으로, USDT(암호화폐)를 보조 결제 수단으로 사용한다. 하나의 통합 앱에서 계정 타입에 따라 사용자/가맹점 화면이 완전히 분리되어 운영된다.

## 2. 시스템 구성

### 2.1 인프라 (Cloudflare 기반)

```
┌──────────────────────────────────────────────────────────────┐
│                      Cloudflare 인프라                          │
│                                                              │
│  ┌──────────────┐  ┌──────────┐  ┌──────────┐               │
│  │ Pages/Workers │  │    D1    │  │    R2    │               │
│  │  Hono API    │  │ 데이터베이스│  │ OTA 번들  │               │
│  │  관리자 웹    │  │ (SQLite) │  │ 정적 자산  │               │
│  │  API 테스트   │  │ 환율 캐시  │  │          │               │
│  └──────┬───────┘  └────┬─────┘  └────┬─────┘               │
│         │               │             │                      │
│         └───────────────┴─────────────┘                      │
│                         │                                    │
│  ┌──────────────────────┴──────────────────────┐             │
│  │         Cron Trigger (1일 2회)                │             │
│  │  외부 환율 API → D1 exchange_rates 캐시 갱신   │             │
│  └─────────────────────────────────────────────┘             │
└──────────────────────────────────────────────────────────────┘
           │                                    │
     API 통신                              OTA 업데이트
           │                                    │
┌──────────┴────────────────────────────────────┴──────────────┐
│                통합 모바일 앱 (React Native)                     │
│                                                              │
│  ┌─────────────────┐            ┌─────────────────┐          │
│  │  사용자 계정      │            │  가맹점 계정      │          │
│  │  (구매/사용/양도) │            │  (스캔/처리/정산) │          │
│  │  완전 분리된 UI  │            │  완전 분리된 UI  │          │
│  └─────────────────┘            └─────────────────┘          │
│            계정 타입에 따라 다른 화면 (동일 앱)                    │
└──────────────────────────────────────────────────────────────┘
```

### 2.2 기술 스택

| 구성 요소 | 기술 스택 | 설명 |
|-----------|----------|------|
| 통합 모바일 앱 | React Native | 사용자/가맹점 계정별 분리 UI (단일 앱) |
| 백엔드 서버 | Cloudflare Pages/Workers + **Hono** | API 라우팅, 관리자 페이지, API 테스트 페이지 |
| 프론트 빌드 | Vite | 관리자 웹 + API 테스트 페이지 빌드 |
| 데이터베이스 | Cloudflare D1 (SQLite) | INTEGER PK AUTOINCREMENT |
| 파일 스토리지 | Cloudflare R2 | OTA 번들, 정적 자산 저장 |
| 환율 데이터 | 외부 API → D1 캐시 | Cron Trigger로 1일 2회 갱신 |

### 2.3 Cloudflare 서비스 상세

#### D1 (데이터베이스)
- SQLite 기반 서버리스 DB
- **PK는 INTEGER PRIMARY KEY AUTOINCREMENT** 사용
- ID 컬럼명은 **테이블명의 단수형** 사용 (예: accounts → account)
- Workers에서 바인딩으로 직접 접근
- 마이그레이션은 Wrangler CLI로 관리

#### R2 (오브젝트 스토리지)
- OTA 업데이트 번들 호스팅
- 앱 업데이트 매니페스트 파일 관리
- 이미지 등 정적 자산 저장

#### Pages/Workers (서버)
- **Hono** 프레임워크로 API 라우팅
- 관리자 SPA 서빙 (Vite 빌드 결과물)
- API 테스트 페이지 서빙
- D1, R2 바인딩 활용

#### Cron Triggers (스케줄러)
- 환율 데이터 갱신: 1일 2회 (00:00, 12:00 UTC)
- 만료 기프티 처리: 1일 1회 (01:00 UTC) — expired 상태 전환 + 낙전 기록
- 정산 생성: 매월 1일 (02:00 UTC) — 전월 사용 거래 집계 → settlements 생성

### 2.4 프로젝트 구조

```
gifticon/
├── apps/
│   └── mobile/                  # React Native 통합 앱 (단일 프로젝트)
│       ├── src/
│       │   ├── common/          # 공통 컴포넌트, 유틸, 훅
│       │   │   ├── components/
│       │   │   ├── hooks/
│       │   │   ├── utils/
│       │   │   └── api/         # API 클라이언트
│       │   ├── user/            # 사용자 계정 화면
│       │   │   ├── screens/
│       │   │   └── components/
│       │   ├── merchant/        # 가맹점 계정 화면
│       │   │   ├── screens/
│       │   │   └── components/
│       │   ├── auth/            # 인증 (공통)
│       │   │   ├── screens/
│       │   │   └── components/
│       │   └── navigation/      # 네비게이션 (계정 타입별 분기)
│       │       ├── UserNavigator.tsx
│       │       ├── MerchantNavigator.tsx
│       │       └── RootNavigator.tsx
│       └── app.json
│
├── backend/                     # Cloudflare Pages/Workers
│   ├── src/
│   │   ├── routes/              # Hono 라우트
│   │   │   ├── auth.ts
│   │   │   ├── vouchers.ts
│   │   │   ├── merchant.ts
│   │   │   ├── payment.ts
│   │   │   └── admin.ts
│   │   ├── services/            # 비즈니스 로직
│   │   │   ├── qr-crypto.ts    # QR 암호화/복호화 (AES-256-GCM)
│   │   │   ├── push.ts         # FCM/APNs 푸시 발송
│   │   ├── middleware/           # 인증, 권한 체크
│   │   ├── cron/                # Cron 작업
│   │   │   ├── exchange-rate.ts # 환율 갱신 (1일 2회)
│   │   │   ├── voucher-expiry.ts# 만료 처리 + 낙전 기록 (1일 1회)
│   │   │   └── settlement.ts    # 월별 정산 생성 (매월 1일)
│   │   ├── db/
│   │   │   ├── schema.sql       # D1 스키마
│   │   │   └── migrations/      # D1 마이그레이션
│   │   └── index.ts             # Hono 엔트리포인트
│   ├── admin/                   # 관리자 웹 (Vite SPA)
│   │   ├── src/
│   │   └── vite.config.ts
│   ├── api-tester/              # API 테스트 페이지 (Vite)
│   │   ├── src/
│   │   └── vite.config.ts
│   ├── wrangler.toml            # CF 설정 (cron triggers 포함)
│   └── package.json
│
└── docs/                        # 프로젝트 문서
    └── PRD.md
```

## 3. 통합 앱 설계 (Unified App)

### 3.1 계정 타입 기반 분리

하나의 앱이지만 **계정 타입(account_type)에 따라 완전히 다른 화면**을 제공한다.
사용자와 가맹점은 별도 계정으로만 가입 가능하며, 하나의 계정이 두 역할을 동시에 가질 수 없다.

| 항목 | 설명 |
|------|------|
| 계정 구분 | 회원가입 시 "사용자" 또는 "가맹점" 선택 (변경 불가) |
| 화면 분리 | 로그인 후 account_type에 따라 완전히 다른 네비게이션/화면 |
| 전환 불가 | 하나의 계정은 하나의 타입만 보유 |
| 별도 가입 | 동일인이 양쪽 모두 필요 시 별도 계정으로 가입 |

### 3.2 계정 타입 모델

```
accounts 테이블
├── account_type: "user"       → 사용자 전용 화면
└── account_type: "merchant"   → 가맹점 전용 화면

* 하나의 계정 = 하나의 타입 (복수 역할 없음)
* 가맹점 계정은 관리자 승인 후 활성화
```

### 3.3 계정 타입별 하단 탭 구성

**사용자 계정 (account_type: "user")**
```
[ 홈 ] [ 중고마켓 ] [ 내 기프티 ] [ 사용내역 ] [ 마이페이지 ]
```
> "홈" 탭에 스토어 바로가기/추천 기프티를 포함하여 기존 "스토어" 탭의 역할을 통합.
> 빈 자리에 "중고마켓" 탭 추가.

**가맹점 계정 (account_type: "merchant")**
```
[ QR스캔 ] [ 사용처리 ] [ 내역 ] [ 정산 ] [ 설정 ]
```

### 3.4 OTA 업데이트 (expo-updates + R2)

| 항목 | 설명 |
|------|------|
| 라이브러리 | **expo-updates** (안정적, 커스텀 서버 지원) |
| 번들 저장소 | Cloudflare R2 버킷 |
| 매니페스트 | R2에 expo-updates 호환 매니페스트로 버전 관리 |
| 업데이트 체크 | 앱 시작 시 매니페스트 확인 → 백그라운드 다운로드 → 다음 시작 시 적용 |
| 강제 업데이트 | forceUpdate 플래그로 즉시 재시작 유도 |
| 롤백 | 이전 번들 유지, 매니페스트 수정으로 롤백 |

## 4. 사용자 역할 (Roles)

### 4.1 일반 사용자 (User)
- 기프티 구매 (PayPal/SmileyPay/USDT 결제)
- 기프티 보관 및 조회
- QR코드 제시하여 기프티 사용
- 일부 금액 사용 (잔액 관리)
- 기프티 양도 (다른 사용자에게 전달)
- 기프티 중고 판매 등록 및 구매 (중고마켓)
- 환불 요청
- 거래 내역 조회

### 4.2 가맹점 (Merchant)
- QR코드 스캔하여 기프티 검증
- 기프티 사용 처리 (전액 / 일부 금액)
- 사용 내역 조회
- 정산 내역 조회
- 실결제 금액 수동 입력

### 4.3 관리자 (Admin)
- 기프티 발행 및 관리
- 가맹점 등록/승인 및 관리
- 사용자 관리
- 거래 내역 모니터링
- 환불 승인/거절
- 정산 관리
- 시스템 설정
- OTA 업데이트 관리

## 5. 핵심 기능

### 5.1 기프티 발행
- 관리자가 기프티 종류(금액권, 할인권 등) 생성
- 각 기프티에 고유 ID 및 QR코드 부여
- 유효기간 설정
- 사용 가능 가맹점 지정 (전체 / 특정 가맹점)

### 5.2 기프티 구매
- PayPal/SmileyPay 기본 결제, USDT 보조 결제
- D1 캐시된 환율 기반 결제 금액 산출
- 결제 완료 시 QR코드 포함 기프티 발급
- 구매 내역 기록 (자동 로그)
- **패키지 상품**: 고정 금액 패키지로 간편 구매 지원

#### 5.2.1 패키지 상품
관리자가 설정한 정액 패키지 단위로 기프티를 구매할 수 있다.

| 패키지 | 금액 (USD) | 설명 |
|--------|-----------|------|
| 🎁 $1,000 | 1,000 | 소액 기프티 |
| 🎁 $2,000 | 2,000 | 기본 기프티 |
| 🎁 $5,000 | 5,000 | 중액 기프티 |
| 🎁 $10,000 | 10,000 | 고액 기프티 |
| 🎁 $20,000 | 20,000 | 프리미엄 기프티 |
| 🎁 $50,000 | 50,000 | VIP 기프티 |

- 패키지 금액은 기프티 템플릿의 `face_value`로 관리
- 관리자가 패키지 추가/수정/비활성화 가능
- 구매 시 선택한 패키지 금액 = 기프티 액면가

### 5.3 기프티 사용
- **전액 사용**: 기프티 금액 전체 사용, 상태를 '사용완료'로 변경
- **일부 금액 사용**: 사용 금액만큼 차감, 잔액 유지
- **사용 흐름**:
  1. 사용자가 앱에서 QR코드 제시
  2. 가맹점이 가맹점 앱으로 QR코드 스캔
  3. 서버에서 기프티 정보 검증 후 가맹점 앱에 표시
  4. 가맹점이 사용 금액 입력 (전액 또는 일부)
  5. 서버에서 잔액 차감 및 거래 기록 (자동 로그)
  6. 사용자/가맹점 양쪽에 결과 반영
- 사용 시 가맹점 정보, 사용 금액, 잔액 기록

### 5.4 양도

#### 5.4.1 양도 기본 정책
- 사용자 간 기프티 양도
- **양도 수수료: 없음 (무료)**
- 양도 시 새로운 QR코드 생성 (보안)
- 양도 이력 추적 (발행 → 최초 구매자 → 양도받은 사용자)
- 양도 제한 설정 가능 (횟수, 기간 등)
- **restricted 상태 사용자는 양도 불가**

#### 5.4.2 양도 대상 조건

| 조건 | 설명 |
|------|------|
| 기프티 상태 | `active`인 기프티만 양도 가능 |
| 잔액 | 잔액이 0보다 큰 경우만 양도 가능 |
| 만료일 | 만료되지 않은 기프티만 양도 가능 |
| 템플릿 설정 | `transferable = 1`인 기프티만 양도 가능 |
| 양도 횟수 | `transfer_count < max_transfers` 이내 |
| 양도자 상태 | `active` 상태만 가능 (restricted/suspended 불가) |
| 수신자 상태 | `active` 상태 사용자만 수신 가능 |
| 수신자 계정 타입 | `user` 타입만 수신 가능 (가맹점 불가) |

#### 5.4.3 양도 흐름

```
[양도 과정 상세]

양도자 (보내는 사람)                         수신자 (받는 사람)
      │                                         │
      ├── 1. 기프티 상세에서 "양도" 버튼 탭        │
      │                                         │
      ├── 2. 수신자 식별 정보 입력                 │
      │   └── 이메일                  │
      │                                         │
      ├── 3. 수신자 검색 결과 확인                  │
      │   └── 이름(마스킹) + 이메일(마스킹) 표시    │
      │   └── 예: 김*수 / ki***@gmail.com        │
      │                                         │
      ├── 4. 양도 확인 팝업                       │
      │   ├── 기프티: 스타벅스 $50               │
      │   ├── 잔액: $35                        │
      │   ├── 수신자: 김*수                      │
      │   ├── 양도 수수료: 없음                   │
      │   └── [취소] [양도 확인]                  │
      │                                         │
      ├── 5. 서버 처리                            │
      │   ├── 양도 가능 조건 재검증                │
      │   ├── owner_account 변경 (양도자 → 수신자) │
      │   ├── transfer_count + 1                │
      │   ├── 기존 qr_token 무효화               │
      │   ├── 새 qr_token + qr_binary 생성       │
      │   ├── transactions 기록                  │
      │   │   type: "transfer"                  │
      │   │   from_account: 양도자               │
      │   │   to_account: 수신자                 │
      │   │   amount: 잔액 전체 (USD)           │
      │   └── 양쪽 푸시 알림 발송                  │
      │                                         │
      ├── 6. 양도 완료 화면                       │
      │   └── "양도가 완료되었습니다"               │
      │                                         │
      │  ┌───────────────────────────────────────┤
      │  │                                       │
      │  │              수신자 앱에 반영            │
      │  │  ├── 내 기프티 목록에 추가              │
      │  │  ├── 새 QR코드 표시                   │
      │  │  ├── 양도 이력에 "양도 받음" 기록        │
      │  │  └── 푸시: "기프티를 양도받았습니다"      │
```

#### 5.4.4 양도 시 데이터 변경 요약

| 항목 | 변경 내용 |
|------|----------|
| vouchers.owner_account | 양도자 → 수신자 |
| vouchers.transfer_count | +1 증가 |
| vouchers.qr_token | 새로 생성 (32bytes random) |
| vouchers.qr_binary | 새로 암호화 (64bytes) |
| vouchers.face_value | 변경 없음 |
| vouchers.balance | 변경 없음 (잔액 그대로 이전) |
| vouchers.status | 변경 없음 (active 유지) |
| vouchers.expires_at | 변경 없음 (원래 만료일 유지) |
| transactions | type="transfer" 1건 생성 |

#### 5.4.5 양도 이력 추적

```
[양도 체인 예시]

기프티 #1234 ($50)
  │
  ├── 2026-02-01  발행 (관리자)
  ├── 2026-02-05  구매 → 사용자A (buyer_account = A)
  │               QR #1 생성
  │
  ├── 2026-02-10  양도 A→B (transfer_count: 1)
  │               QR #1 무효화, QR #2 생성
  │               transactions: from=A, to=B
  │
  ├── 2026-02-15  양도 B→C (transfer_count: 2)
  │               QR #2 무효화, QR #3 생성
  │               transactions: from=B, to=C
  │
  └── max_transfers=3 이면 1회 더 양도 가능
      max_transfers=2 이면 추가 양도 불가
```

### 5.5 환불

#### 5.5.1 환불 기본 정책
- 사용자가 환불 요청
- 미사용 기프티: 전액 환불
- 일부 사용 기프티: 잔액 환불
- 관리자 승인 후 **원결제 수단으로 환불** 처리
- **PayPal/SmileyPay**: 원결제 건 환불 API 호출
- **USDT 결제**: 사용자 지갑으로 USDT 전송 (네트워크 수수료 차감)

#### 5.5.2 환불 금액 산출

```
[환불 금액 계산]

환불 대상 잔액 (USD)
    │
    ├── PayPal/SmileyPay 결제:
    │   └── 원결제 건으로 USD 환불 (PG 환불 API)
    │       예: 잔액 $35 → PayPal 환불 $35
    │
    └── USDT 결제:
        ├── USD→USDT 환산 (환불 시점 환율)
        ├── 네트워크 수수료 차감 (회사 부담)
        │   예: $35 ≈ 35 USDT - 0.5 USDT (가스비) = 34.5 USDT
        └── 최종 환불액: 34.5 USDT → 사용자 지갑 전송
```

#### 5.5.3 환불 흐름

```
사용자                        서버                        관리자
  │                            │                            │
  ├── 환불 요청                 │                            │
  │   (기프티 상세 → 환불 버튼) │                            │
  │                            │                            │
  │                            ├── 환불 가능 조건 확인       │
  │                            │   ├── status: active       │
  │                            │   ├── 템플릿 refundable=1  │
  │                            │   └── 사용자 상태 active    │
  │                            │                            │
  │                            ├── voucher status →          │
  │                            │   refund_pending            │
  │                            │                            │
  │                            │                            ├── 환불 요청 확인
  │                            │                            │
  │                            │                            ├── 승인 시:
  │                            │                            │   ├── 환불 금액 산출 (USD)
  │                            │                            │   ├── 원결제 수단으로 환불
  │                            │                            │   │   (PayPal/SmileyPay: PG환불
  │                            │                            │   │    USDT: 지갑 전송)
  │                            │                            │   ├── voucher status → refunded
  │                            │                            │   ├── transactions 기록
  │                            │                            │   │   (type: refund, 수수료 포함)
  │                            │                            │   └── 푸시: "환불 완료"
  │                            │                            │
  │                            │                            └── 거절 시:
  │                            │                                ├── voucher status → active (복원)
  │  푸시: "환불 거절"           │                                └── 거절 사유 기록
```

#### 5.5.4 환불 거래 기록

| 필드 | 값 |
|------|-----|
| type | "refund" |
| amount | 환불 USD 금액 (수수료 차감 전) |
| payment_method | 원결제 수단 (paypal, smilepay, usdt) |
| payment_tx_id | PG 환불 ID 또는 블록체인 tx hash |
| crypto_amount | USDT 결제 시 실제 전송된 USDT 금액 (수수료 차감 후) |
| exchange_rate | 환불 시점 환율 |
| note | 네트워크 수수료 금액 기록 |

### 5.6 정산 시스템

#### 5.6.1 정산 주기 및 방식
- **월 1회 정산**: 사용된 기프티 금액을 **익월 지정일**에 가맹점에 입금
- 정산 대상: 해당 월에 "사용 처리"된 거래 (transactions.type = use, partial_use)
- 이미 정산 완료된 거래는 재정산 불가

```
[정산 흐름]

이번 달 (2월)                    다음 달 (3월 지정일)
  │                                    │
  ├── 2/5  사용 ₩15,000               │
  ├── 2/12 사용 ₩20,000               │
  ├── 2/19 사용 ₩5,000                │
  │                                    │
  │  합계: ₩40,000                     │
  │                                ──→ 가맹점에 ₩40,000 정산 입금
```

#### 5.6.2 기프티 만료 처리 (낙전 수익)
- 유효기간 내 **미사용** 잔액은 만료 시 **플랫폼 수익(낙전)** 으로 전환
- 만료된 기프티:
  - status → `expired`
  - **사용자 앱**: 목록에서 "기간 만료" 표시, 사용/양도/환불 불가
  - **가맹점 앱**: QR 스캔 시 "만료된 기프티" 오류
  - **관리자**: 낙전 수익으로 집계, 만료 기프티는 일반 목록에서 숨김 (필터로 조회 가능)
- 만료 처리는 **Cron Trigger** (1일 1회)로 자동 실행

```
[만료 처리]

기프티 ₩50,000 (잔액 ₩35,000)
    │
    ├── 만료일 도래
    │
    ├── status: active → expired
    ├── 잔액 ₩35,000 → 낙전 수익 기록
    ├── 사용자 앱: "기간 만료" 표시
    └── 정산 대상에서 제외 (사용된 적 없는 잔액이므로)
```

#### 5.6.3 사전 매입 기프티
- 플랫폼이 가맹점에서 **직접 쿠폰/기프티를 사전 매입**하는 경우
- 매입한 총액이 소진될 때까지 기프티 발행 가능
- **우선순위**: 개별 기프티의 유효기간이 매입 총액보다 우선
  - 매입 잔액이 남아있어도 개별 기프티가 만료되면 해당 기프티는 사용 불가
  - 매입 잔액이 소진되면 신규 발행 중단 (기존 발행분은 유효기간까지 유효)

```
[사전 매입 예시]

매입 계약: 스타벅스 ₩1,000,000 매입
    │
    ├── 발행: 5만원권 × 15장 = ₩750,000 발행됨
    ├── 매입 잔액: ₩250,000 (추가 발행 가능)
    │
    ├── 개별 기프티 #1: 만료 → 낙전 (₩50,000)
    │   └── 매입 잔액에는 영향 없음 (이미 발행된 건)
    │
    ├── 개별 기프티 #2: 사용 ₩30,000
    │   └── 정산 대상 (익월 정산)
    │
    └── 매입 잔액 ₩250,000 소진 시 → 추가 발행 불가
```

#### 5.6.4 정산 불이행/분쟁 처리
- 정산 과정에서 문제 발생 시 (가맹점 폐업, 분쟁 등)
- **해당 정산 금액은 소멸 처리** (write-off)
- 이미 발행된 기프티는 회수 불가 (사용자 보호)
- 취소/환불이 발생한 경우에만 잔액이 시스템으로 회수됨

#### 5.6.5 정산 규칙 요약

| 상황 | 처리 |
|------|------|
| 기프티 사용됨 | 익월 지정일에 가맹점 정산 |
| 기프티 만료 (미사용 잔액) | 플랫폼 낙전 수익 |
| 기프티 환불/취소 | 잔액 시스템 회수, 정산 대상 제외 |
| 이미 정산 완료된 거래 | 재정산 없음 |
| 이미 발행된 기프티 | 잔액 재충전 불가 |
| 정산 분쟁/불이행 | 해당 금액 소멸 (write-off) |
| 사전 매입 잔액 소진 | 신규 발행 중단, 기존분은 유효 |

### 5.7 사용자 한도 및 제한 관리

#### 5.7.1 금액 한도 체계

```
한도 적용 우선순위:

  개인별 설정값 (accounts.purchase_limit)
       │
       │  NULL이면 ↓
       │
  시스템 기본값 (system_settings.default_purchase_limit)
       │
       │  기본값은 매우 큰 값 (사실상 무제한)
```

- **기프티 자체 최대 금액**: 제한 없음
- **시스템 기본 한도**: 매우 큰 값으로 설정 (사실상 무제한)
- **개인별 한도**: 관리자가 특정 사용자에게만 개별 제한 설정 가능

| 한도 종류 | 시스템 기본 | 개인별 오버라이드 | 설명 |
|----------|-----------|----------------|------|
| 1회 구매 한도 | 매우 큰 값 | accounts.purchase_limit | 1건당 최대 구매 금액 |
| 1일 구매 한도 | 매우 큰 값 | 개인별 설정 가능 | 하루 누적 구매 한도 |
| 월간 구매 한도 | 매우 큰 값 | 개인별 설정 가능 | 월간 누적 구매 한도 |
| 1회 사용 한도 | 제한 없음 | accounts.use_limit | 1건당 최대 사용 금액 |

#### 5.7.2 사용자 제한 상태

문제가 발생한 사용자에게 즉시 제한을 적용할 수 있다.

| 상태 | 구매 | 사용 | QR표시 | 양도 | 환불 | 설명 |
|------|------|------|--------|------|------|------|
| active | ✅ | ✅ | ✅ | ✅ | ✅ | 정상 |
| restricted | ⚠️ 한도 | ⚠️ 한도 | ✅ | ❌ | ✅ | 부분 제한 (한도 축소) |
| suspended | ❌ | ❌ | ❌ | ❌ | ❌ | 완전 정지 |

- `restricted`: 계정은 살아있으나 금액 한도가 축소됨. 양도 차단.
- `suspended`: 모든 기능 차단. 로그인은 가능하나 "정지된 계정" 안내만 표시.

#### 5.7.3 관리자 제한 적용 흐름

```
관리자가 문제 감지
    │
    ├── 경미: restricted 전환 + 한도 축소
    │   ├── purchase_limit = 50000 (5만원으로 제한)
    │   ├── use_limit = 10000 (1만원으로 제한)
    │   └── restriction_reason = "비정상 거래 패턴 감지"
    │
    ├── 심각: suspended 전환
    │   └── restriction_reason = "사기 의심 계정"
    │
    └── 해제: active 복원 + 한도 NULL (기본값 복원)
```

#### 5.7.4 구매 시 한도 검증 흐름

```
사용자가 ₩100,000 기프티 구매 요청
    │
    ├── 1. 계정 상태 확인 (active / restricted?)
    │
    ├── 2. 1회 구매 한도 확인
    │   └── accounts.purchase_limit ?? system_settings.default_purchase_limit
    │   └── ₩100,000 ≤ 한도? → 통과 / 초과 → 거절
    │
    ├── 3. 1일 누적 한도 확인
    │   └── 오늘 구매 합계 + ₩100,000 ≤ 일일 한도?
    │
    ├── 4. 월간 누적 한도 확인
    │   └── 이번 달 구매 합계 + ₩100,000 ≤ 월간 한도?
    │
    └── 5. 모두 통과 → 결제 진행
```

### 5.8 추적 및 이력 관리 (2중 로깅)
- 기프티 생애주기 전체 추적
  - 발행 → 구매 → 사용/양도/환불
- **2중 로깅 시스템**:
  - **자동 로그 (transactions)**: 구매/사용/양도/환불 시 시스템이 자동 기록
  - **수동 로그 (merchant_settlements)**: 가맹점이 실제 금전 거래 내역(법정화폐, 현금 등) 직접 입력
- 자동 로그와 수동 로그는 FK로 연결되어 대조 가능
- 모든 거래에 타임스탬프, 관련 사용자, 가맹점 정보 기록
- 감사 로그 (Audit Log) 유지

### 5.9 푸시 알림

#### 5.9.1 플랫폼별 구현

| 플랫폼 | 서비스 | 설명 |
|--------|--------|------|
| Android | FCM (Firebase Cloud Messaging) | Google 네이티브 푸시 |
| iOS | APNs (Apple Push Notification service) | Apple 네이티브 푸시 |

#### 5.9.2 푸시 알림 발송 시점

| 이벤트 | 수신 대상 | 내용 |
|--------|----------|------|
| 기프티 구매 완료 | 구매자 (User) | "기프티가 발급되었습니다" |
| 기프티 사용 처리 | 소유자 (User) | "기프티가 사용되었습니다 (잔액: $X)" |
| 기프티 양도 수신 | 수신자 (User) | "기프티를 양도받았습니다" |
| 환불 승인/거절 | 요청자 (User) | "환불이 승인/거절되었습니다" |
| 기프티 만료 임박 | 소유자 (User) | "기프티가 N일 후 만료됩니다" (7일, 3일, 1일 전) |
| 가맹점 승인 완료 | 가맹점 (Merchant) | "가맹점 승인이 완료되었습니다" |
| 정산 완료 | 가맹점 (Merchant) | "N월 정산이 입금되었습니다" |

#### 5.9.3 구현 방식
- 앱 최초 실행 시 디바이스 토큰 발급 → 서버에 등록
- Workers에서 FCM/APNs HTTP API로 발송
- 디바이스 토큰은 accounts 테이블에 저장 (push_token, push_platform)

### 5.10 오프라인 대응

#### 5.10.1 오프라인 정책

```
[오프라인 시 동작]

  ✅ 가능한 것 (앱 내부 캐시 조회):
  ├── 보유 기프티 목록 조회
  ├── 기프티 상세 정보 확인
  ├── QR코드 이미지 표시
  ├── 거래 내역 조회 (마지막 동기화 기준)
  └── 가맹점: 오늘의 사용 내역 조회

  ❌ 불가능한 것 (서버 통신 필수):
  ├── 기프티 구매 (결제)
  ├── 기프티 사용 처리 (QR 스캔 → 서버 복호화)
  ├── 양도 / 환불 요청
  ├── QR 갱신
  └── 가맹점: QR 스캔 및 사용 처리
```

> **사용(결제) 처리는 반드시 온라인 상태에서만 가능** — QR 바이너리 복호화가 서버에서만 이루어지므로 오프라인 사용은 원천적으로 불가

#### 5.10.2 캐싱 전략

| 캐싱 대상 | 갱신 시점 | 저장소 |
|----------|----------|--------|
| 보유 기프티 목록 | 앱 진입, 구매/사용/양도 시 | AsyncStorage / MMKV |
| 기프티 상세 + QR 이미지 | 상세 화면 진입 시 | AsyncStorage / MMKV |
| 거래 내역 (최근 100건) | 내역 탭 진입 시 | AsyncStorage / MMKV |
| 가맹점 오늘의 내역 | 스캔 처리 완료 시 | AsyncStorage / MMKV |
| 환율 정보 | 앱 진입 시 | AsyncStorage / MMKV |

- 네트워크 복구 시 자동 동기화
- 오프라인 상태 시 상단에 "오프라인 모드" 배너 표시

### 5.11 OTA 업데이트 (expo-updates)

#### 5.11.1 라이브러리 선택

| 항목 | 설명 |
|------|------|
| 라이브러리 | **expo-updates** |
| 커스텀 서버 | Cloudflare R2 + Workers |
| 선택 이유 | 안정적, 커스텀 서버 지원, Expo 생태계 활용, bare workflow 호환 |

#### 5.11.2 업데이트 흐름

```
앱 시작
  │
  ├── expo-updates가 R2 매니페스트 확인
  │   GET /api/ota/manifest
  │
  ├── 신규 버전 존재?
  │   ├── Yes → 백그라운드 다운로드
  │   │         다운로드 완료 → 다음 앱 시작 시 적용
  │   └── No  → 현재 버전 그대로 실행
  │
  └── 강제 업데이트 플래그 (forceUpdate: true)
      └── 즉시 재시작 안내
```

#### 5.11.3 R2 번들 관리

```
R2 버킷:
ota/
├── manifest.json              # expo-updates 호환 매니페스트
├── bundles/
│   ├── 1.0.0/
│   │   ├── android-<hash>.bundle
│   │   └── ios-<hash>.bundle
│   ├── 1.0.1/
│   │   ├── android-<hash>.bundle
│   │   └── ios-<hash>.bundle
│   └── ...
└── assets/                    # 번들에 포함된 정적 자산
```

### 5.12 중고거래 마켓플레이스

사용자들이 보유한 기프티를 앱 내에서 서로 사고팔 수 있는 중고거래 마켓플레이스. 기존 양도(무료)와는 별도로, 가격을 정해 판매하고 구매자가 PayPal/SmileyPay/USDT로 결제하는 구조.

#### 5.12.1 기본 정책
- 결제 수단: **PayPal, SmileyPay** (기본) / **USDT** (보조)
- 판매 수수료: **판매 금액의 5%** (플랫폼 수익)
- 판매 가능 조건: active 상태, 잔액 > 0, 미만료, **사용 이력 없는 기프티만** (잔액 = 액면가)
- 사용 이력 판단 기준: `use`, `partial_use` 타입 거래가 없어야 함 (중고거래 이력인 `resale_buy`, `resale_sell`은 사용으로 취급하지 않음)
- 구매자/판매자 모두 user 계정만 가능
- restricted/suspended 사용자는 거래 불가

#### 5.12.2 판매 등록 흐름
1. 판매자: 내 기프티에서 "판매 등록" 선택 (사용 이력 없는 기프티만 버튼 노출)
2. 판매 가격(USD) 입력 (액면가 대비 자유 설정)
3. 판매 등록 → 기프티 status: `on_sale` (사용/양도/환불 잠금)
4. 중고마켓 목록에 노출
5. 판매 취소 가능 → status: `active` 복원

#### 5.12.3 구매 흐름
1. 구매자: 중고마켓에서 기프티 선택
2. 결제 금액(USD) 확인 + 수수료 표시
3. 결제 수단 선택 (PayPal/SmileyPay/USDT) → 결제 처리
4. 서버 확인 후:
   - 기프티 소유권 이전 (owner_account 변경)
   - QR 재발급
   - 판매자에게 판매 금액의 95% 전송 (5% 수수료 차감)
   - transactions 2건 기록 (resale_buy, resale_sell)
5. 양쪽 푸시 알림

#### 5.12.4 판매 대금 정산
- 판매 즉시 정산 (월별 정산과 별도)
- 판매 금액 - 5% 수수료 = 판매자 수령액
- 판매 대금을 판매자에게 지급 (결제 수단에 따라 PayPal/SmileyPay 송금 또는 USDT 전송)
- 네트워크 수수료(가스비)는 판매 수수료에서 충당

## 6. QR코드 설계 (암호화 바이너리)

### 6.1 설계 원칙
- QR코드 데이터를 **서버 측 암호화 바이너리**로 생성
- 일반 QR 스캐너로 촬영 시 **해독 불가능한 바이너리 데이터**만 표시
- **우리 앱에서만** 스캔 → 서버 전송 → 복호화 → 검증 가능
- 앱에는 복호화 키를 두지 않음 (서버만 보유)

### 6.2 바이너리 페이로드 구조

```
[서버에서 QR 생성 시]

1. Seed 생성 (결정론적)
┌──────────────────────────────────────────────────┐
│ seed = SHA-256(device_id + email + timestamp)    │
│                                                  │
│ - device_id: 사용자 기기 고유 ID (accounts.device_id) │
│ - email: 사용자 이메일 (accounts.email)              │
│ - timestamp: QR 생성 시점 ISO8601 (밀리초 포함)       │
└──────────────────────────────────────────────────┘

2. qr_token 생성 (32 bytes)
┌──────────────────────────────────────────────────┐
│ qr_token = HMAC-SHA256(QR_ENCRYPTION_KEY, seed)  │
└──────────────────────────────────────────────────┘

3. 평문 구성 (36 bytes)
┌──────────────────┬────────────────────────────┐
│ voucher PK (4B)  │ qr_token (32B)             │
│ uint32 LE        │ seed 기반 HMAC 파생         │
└──────────────────┴────────────────────────────┘

4. AES-256-GCM 암호화 (서버 시크릿 키)
┌──────────┬─────────────────┬──────────────┐
│ IV (12B) │ Ciphertext (36B)│ Auth Tag(16B)│
└──────────┴─────────────────┴──────────────┘
= 총 64 bytes 암호화 바이너리

5. QR코드 저장
→ 64 bytes를 QR 바이너리 모드(Mode 0100)로 인코딩
→ 일반 스캐너: 깨진 문자/바이너리 표시 (해독 불가)
```

> **Seed 구성 요소**:
> - `device_id`: 기기 바인딩 — 다른 기기에서 동일 토큰 생성 불가
> - `email`: 사용자 바인딩 — 다른 사용자가 동일 토큰 생성 불가
> - `timestamp`: 시간 바인딩 — 동일 기기/사용자라도 매번 고유 토큰 생성

### 6.3 QR 스캔 및 검증 흐름

```
[사용자 앱 - QR 표시]                [가맹점 앱 - QR 스캔]
      │                                    │
      │  QR코드 화면 제시                     │
      │ ──────────────────────────────────→ │
      │                                    │
      │                          카메라로 QR 스캔
      │                          바이너리 64bytes 추출
      │                                    │
      │                          POST /api/merchant/scan
      │                          Body: { data: "<base64>" }
      │                                    │
      │                              ┌─────┴─────┐
      │                              │   서버     │
      │                              │           │
      │                              │ 1. base64 → 64bytes 복원
      │                              │ 2. AES-256-GCM 복호화
      │                              │    (서버 시크릿 키 사용)
      │                              │ 3. voucher PK 추출
      │                              │ 4. qr_token 추출
      │                              │ 5. DB 검증:
      │                              │    - 토큰 일치 여부
      │                              │    - 기프티 상태 (active?)
      │                              │    - 만료일 확인
      │                              │    - 잔액 확인
      │                              │ 6. 검증 성공 시 기프티 정보 반환
      │                              └─────┬─────┘
      │                                    │
      │                          기프티 정보 표시
      │                          (이름, 잔액, 만료일 등)
      │                                    │
      │                          가맹점이 사용 금액 입력
      │                          POST /api/merchant/use
      │                                    │
      │  잔액 변경 반영 (푸시/폴링)           사용 완료 확인
```

### 6.4 QR코드 생성/갱신 시점

| 시점 | 동작 |
|------|------|
| 기프티 구매 완료 | 최초 QR 생성 (device_id+email+timestamp seed → qr_token 파생 + 암호화) |
| 사용자가 QR 조회 | 기존 QR 반환 (매번 새로 만들지 않음) |
| 양도 완료 | 기존 qr_token 무효화, 수신자의 device_id+email+timestamp seed로 새 QR 생성 |
| 사용 처리 완료 | 사용된 토큰 무효화, 잔액 남아있으면 소유자 seed로 새 QR 생성 |
| QR 수동 갱신 요청 | 기존 무효화 + 소유자 seed로 새 QR 생성 (분실/유출 대응) |
| 중고거래 완료 | 기존 qr_token 무효화, 구매자의 device_id+email+timestamp seed로 새 QR 생성 |

### 6.5 보안 상세

| 항목 | 설명 |
|------|------|
| 암호화 알고리즘 | AES-256-GCM (인증 암호화) |
| 암호화 키 | Workers 환경변수 (QR_ENCRYPTION_KEY), 서버만 보유 |
| Seed 구성 | SHA-256(device_id + email + timestamp) — 기기/사용자/시간 바인딩 |
| 토큰 생성 | HMAC-SHA256(QR_ENCRYPTION_KEY, seed) — 결정론적 파생 |
| IV (초기화 벡터) | QR 생성 시마다 crypto random 12bytes |
| Auth Tag | GCM 인증 태그로 위변조 감지 |
| 키 로테이션 | 주기적 키 교체, 이전 키도 복호화용으로 유지 |
| 앱 측 키 없음 | 앱은 바이너리를 서버에 전달만 함, 복호화 불가 |

### 6.6 일반 QR 스캐너로 촬영 시

```
일반 스캐너 결과 예시:
→ "�Kw\x8f#\x12..." (깨진 문자열)
→ 또는 "바이너리 데이터를 읽을 수 없습니다" 오류
→ 어떤 경우에도 voucher ID, 토큰 등 의미 있는 정보 노출 없음
```

## 7. 가격 체계 및 결제

### 7.1 기준 통화: USD

**시스템 전체의 기준 통화는 USD**이다.

```
┌─────────────────────────────────────────────────┐
│              가격 체계                             │
│                                                 │
│   기프티 액면가           모두 USD 기준으로 설정     │
│   (voucher_templates)    예: $50, $100          │
│                                                 │
│   사용자 한도             USD 기준               │
│   (purchase_limit)       예: $1,000             │
│                                                 │
│   정산 금액              USD 기준 집계            │
│   (settlements)                                 │
│                                                 │
│   잔액/거래              USD 기준 기록            │
│   (vouchers/transactions)                       │
│                                                 │
└─────────────────────────────────────────────────┘
```

- 기프티 액면가, 잔액, 거래 금액 등 **모든 금액은 USD 단위**
- 사용자 앱에서 언어/로케일에 따라 현지 통화(KRW, MYR 등)로 환산 표시
- 결제 수단은 **페이팔/스마일페이가 기본**, 암호화폐(USDT)는 보조 수단

### 7.2 결제 수단

#### 7.2.1 기본 결제 수단 (Primary)

| 결제 수단 | 대상 지역 | 특징 |
|----------|---------|------|
| **PayPal** | 글로벌 | 글로벌 표준, 신용카드/계좌 연동, 구매자 보호 |
| **SmileyPay** | 말레이시아/동남아 | 동남아 현지 결제, 현지 은행/e-wallet 연동 |

- 사용자가 결제 시 **PayPal 또는 SmileyPay** 중 선택
- 결제 금액은 USD 기준이며, PayPal/SmileyPay에서 현지 통화 자동 환산
- 결제 완료 콜백(webhook) 수신 후 기프티 발급

#### 7.2.2 보조 결제 수단 (Supplementary)

| 결제 수단 | 네트워크 | 특징 |
|----------|---------|------|
| **USDT** | Tron (TRC-20) | 암호화폐 결제, 낮은 수수료 |
| USDT | Ethereum (ERC-20) | 향후 확장 |

- 결제 수단 선택 화면에서 "암호화폐로 결제" 옵션으로 제공
- 암호화폐 결제 시 내부 환율표 기반 USD → USDT 환산
- 개인 지갑 → 플랫폼 전용 지갑으로 USDT 전송 방식
- 블록체인 트랜잭션 확인 후 기프티 발급

### 7.3 내부 환율표

USD를 기준으로 다른 통화와의 환율을 **내부 환율표(exchange_rates)**에서 관리한다.

```
내부 환율표 (exchange_rates)
base: USD (항상 고정)

┌───────────────┬──────────┬──────────────────────────┐
│ quote_currency │ rate     │ 의미                      │
├───────────────┼──────────┼──────────────────────────┤
│ krw           │ 1385.0   │ 1 USD = ₩1,385          │
│ myr           │ 4.47     │ 1 USD = RM 4.47         │
│ jpy           │ 149.5    │ 1 USD = ¥149.5          │
│ eur           │ 0.92     │ 1 USD = €0.92           │
│ usdt          │ 1.0      │ 1 USD ≈ 1 USDT          │
│ ...           │ ...      │ ...                      │
└───────────────┴──────────┴──────────────────────────┘
```

- 외부 API에서 가져온 환율을 USD 기준으로 저장
- 앱에서는 사용자 언어/로케일에 맞는 현지 통화로 환산 표시
- USDT 환율은 실시간 시세 반영 (≈1.0 USD이나 변동 가능)

### 7.4 결제 흐름

#### 7.4.1 PayPal / SmileyPay 결제 흐름 (기본)

```
1. 사용자가 기프티 선택 (액면가: USD 표시)
2. 결제 수단 선택: PayPal 또는 SmileyPay
3. 결제 금액 확인 (USD 기준)
4. 외부 결제 페이지로 리다이렉트 (PayPal/SmileyPay)
5. 사용자가 결제 승인
6. 결제 완료 콜백(webhook) 수신
7. 결제 확인 → 기프티 발급 → 자동 로그 기록
```

#### 7.4.2 USDT 결제 흐름 (보조)

```
1. 사용자가 기프티 선택 (액면가: USD 표시)
2. 결제 수단: "암호화폐로 결제" 선택
3. 결제 금액 USD → USDT 환산 표시
4. 플랫폼 전용 지갑 주소 + USDT 결제 금액 표시
5. 사용자가 개인 지갑에서 USDT 전송
6. 블록체인 트랜잭션 확인
7. 결제 완료 → 기프티 발급 → 자동 로그 기록
```

### 7.5 환불 흐름

| 결제 수단 | 환불 방식 |
|----------|---------|
| PayPal | PayPal 원결제 건으로 환불 (PayPal API) |
| SmileyPay | SmileyPay 원결제 건으로 환불 (SmileyPay API) |
| USDT | 사용자 지갑으로 USDT 전송 (네트워크 수수료 차감) |

### 7.6 수수료 정책

| 상황 | 수수료 부담 | 설명 |
|------|-----------|------|
| **구매 (PayPal/SmileyPay)** | **플랫폼 부담** | PG 수수료는 플랫폼이 부담 |
| **구매 (USDT)** | **구매자 부담** | 네트워크 가스비는 구매자 지갑에서 차감 |
| **환불 (PayPal/SmileyPay)** | **플랫폼 부담** | PG 환불 수수료 플랫폼 부담 |
| **환불 (USDT)** | **회사 부담** (환불액에서 차감) | 네트워크 수수료 제외 후 전송 |
| **정산** | **회사 부담** | 정산액에서 PG/네트워크 수수료 제외 후 지급 |

### 7.7 앱 표시 통화

```
[표시 규칙]

기본 표시: USD (시스템 기준 통화)
보조 표시: 사용자 언어/로케일 기반 현지 통화

예시 (영어 사용자):
  기프티: $50.00
  잔액:   $35.00

예시 (한국어 사용자):
  기프티: $50.00
          ≈ ₩69,250

예시 (말레이시아 사용자):
  기프티: $50.00
          ≈ RM 223.50
```

- 기준 금액(USD)은 항상 표시
- 사용자 언어 설정에 따라 현지 통화 환산을 병행 표시 (≈)
- 영어(USD) 사용자는 보조 통화 표시 생략 가능
- 현지 통화 환산은 내부 환율표 기반

## 8. 환율 시스템

### 8.1 외부 환율 API

| 우선순위 | API | 특징 | 비용 |
|---------|-----|------|------|
| Primary | [fawazahmed0/exchange-api](https://github.com/fawazahmed0/exchange-api) | 200+ 통화, 무제한, API키 불필요 | 무료 |
| Fallback | [CoinGecko Demo API](https://www.coingecko.com/en/api) | 암호화폐(USDT) 시세 | 무료 (가입 필요) |

### 8.2 환율 갱신 흐름

```
Cron Trigger (1일 2회: 00:00, 12:00 UTC)
    │
    ├── 1. fawazahmed0 API 호출
    │   └── USD 기준 전체 환율 수집
    │       ├── 성공 → D1 exchange_rates에 USD 기준으로 저장
    │       └── 실패 → CoinGecko 폴백 (USDT 시세용)
    │
    ├── 2. 자동 저장되는 환율:
    │   ├── usd → krw (법정화폐)
    │   ├── usd → myr (말레이시아 링깃)
    │   ├── usd → jpy, eur, ... (주요 법정화폐)
    │   └── usd → usdt (암호화폐 시세)
    │
    ├── 3. 관리자 수동 조정분은 덮어쓰지 않음
    │   └── source = "manual"인 환율은 Cron에서 스킵
    │
    └── 4. 이전 환율 아카이빙 (30일 이상 → R2)
```

### 8.3 환율 사용 방식

- **구매 시 (PayPal/SmileyPay)**: USD 기준 결제, PG에서 현지 통화 자동 환산
- **구매 시 (USDT)**: 내부 환율표 USD→USDT 환산하여 USDT 결제 금액 산출
- **환불 시**: 원결제 수단으로 환불 (PayPal/SmileyPay: 원결제 환불, USDT: 지갑 전송)
- **앱 표시 시**: 사용자 언어/로케일 기반 현지 통화 참고 표시 (USD→KRW, USD→MYR 등)
- **수동 정산 시**: 가맹점이 직접 금액 입력 (내부 환율 참고값 제공)

## 9. 데이터 모델 (D1 / SQLite)

> **ID 컬럼 규칙**: INTEGER PRIMARY KEY AUTOINCREMENT, 컬럼명은 테이블명의 단수형
> 예: accounts 테이블 → `account`, vouchers 테이블 → `voucher`
> FK 컬럼명: 참조 테이블 단수형 그대로 사용 (예: `account`, `merchant`, `voucher`)

### 9.1 계정 (accounts)
| 필드 | 타입 | 설명 |
|------|------|------|
| account | INTEGER | PK AUTOINCREMENT |
| account_type | TEXT | "user" 또는 "merchant" |
| email | TEXT | 로그인 이메일 (UNIQUE) |
| password_hash | TEXT | 비밀번호 해시 |
| name | TEXT | 이름 |
| wallet_address | TEXT | 암호화폐 지갑 주소 (USDT 결제 시 사용, 선택) |
| status | TEXT | pending_approval (가맹점 승인 대기), active, restricted, suspended |
| purchase_limit | REAL | 개인별 구매 한도 (NULL = 시스템 기본값 적용) |
| use_limit | REAL | 개인별 1회 사용 한도 (NULL = 제한 없음) |
| restriction_reason | TEXT | 제한 사유 (restricted/suspended 시 기록) |
| restricted_at | TEXT (ISO8601) | 제한 적용일 |
| device_id | TEXT | 디바이스 고유 ID (QR 생성 seed 용) |
| push_token | TEXT | 푸시 알림 디바이스 토큰 |
| push_platform | TEXT | android 또는 ios |
| created_at | TEXT (ISO8601) | 가입일 |
| updated_at | TEXT (ISO8601) | 수정일 |

> 사용자 계정은 가입 즉시 `active`, 가맹점 계정은 `pending_approval`로 시작하여 관리자 승인 후 `active`
> `restricted`: 계정 활성 상태이나 구매/사용 한도가 제한된 상태 (완전 정지가 아닌 부분 제한)
> `purchase_limit`이 NULL이면 시스템 기본값(system_settings), 0이면 구매 차단

### 9.2 가맹점 프로필 (merchants)
| 필드 | 타입 | 설명 |
|------|------|------|
| merchant | INTEGER | PK AUTOINCREMENT |
| account | INTEGER | FK → accounts (가맹점 계정, UNIQUE) |
| name | TEXT | 가맹점명 |
| category | TEXT | 업종 |
| address | TEXT | 주소 |
| contact | TEXT | 연락처 |
| wallet_address | TEXT | 정산 지갑 주소 |
| approved_at | TEXT (ISO8601) | 승인일 |
| created_at | TEXT (ISO8601) | 등록일 |
| updated_at | TEXT (ISO8601) | 수정일 |

> 가맹점 상태는 accounts.status로 통합 관리 (중복 제거)

### 9.3 기프티 템플릿 (voucher_templates)
| 필드 | 타입 | 설명 |
|------|------|------|
| voucher_template | INTEGER | PK AUTOINCREMENT |
| name | TEXT | 기프티명 |
| type | TEXT | fixed_amount, discount |
| face_value | REAL | 액면가 (USD 기준) |
| description | TEXT | 설명 |
| image_url | TEXT | 기프티 이미지 (R2) |
| valid_days | INTEGER | 유효기간 (일) |
| merchant_scope | TEXT | all, specific |
| transferable | INTEGER | 양도 가능 (0/1) |
| max_transfers | INTEGER | 최대 양도 횟수 |
| refundable | INTEGER | 환불 가능 (0/1) |
| refund_fee_rate | REAL | 환불 수수료율 (0.0~1.0) |
| status | TEXT | active, inactive |
| created_at | TEXT (ISO8601) | 생성일 |
| updated_at | TEXT (ISO8601) | 수정일 |

### 9.4 기프티 (vouchers)
| 필드 | 타입 | 설명 |
|------|------|------|
| voucher | INTEGER | PK AUTOINCREMENT |
| voucher_template | INTEGER | FK → voucher_templates |
| bulk_purchase | INTEGER | FK → bulk_purchases (NULL 가능: 사전 매입 연결) |
| owner_account | INTEGER | FK → accounts (현재 소유자, user 타입) |
| buyer_account | INTEGER | FK → accounts (최초 구매자, user 타입) |
| qr_token | BLOB | 현재 유효한 QR 토큰 - 32bytes, HMAC(seed) 파생 (UNIQUE) |
| qr_binary | BLOB | 암호화된 QR 바이너리 페이로드 - 64bytes |
| face_value | REAL | 액면가 (USD) |
| balance | REAL | 잔액 (USD) |
| status | TEXT | active, used, expired, refunded, refund_pending, on_sale |
| transfer_count | INTEGER | 양도 횟수 (DEFAULT 0) |
| purchased_at | TEXT (ISO8601) | 구매일 |
| expires_at | TEXT (ISO8601) | 만료일 |
| created_at | TEXT (ISO8601) | 생성일 |
| updated_at | TEXT (ISO8601) | 수정일 |

### 9.5 거래 내역 (transactions) - 자동 기록
| 필드 | 타입 | 설명 |
|------|------|------|
| transaction | INTEGER | PK AUTOINCREMENT |
| voucher | INTEGER | FK → vouchers |
| type | TEXT | purchase, use, partial_use, transfer, refund, resale_buy, resale_sell |
| from_account | INTEGER | FK → accounts (NULL 가능: 구매 시 없음) |
| to_account | INTEGER | FK → accounts (NULL 가능: 사용 시 없음) |
| merchant | INTEGER | FK → merchants (NULL 가능: 양도/환불 시 없음) |
| amount | REAL | 거래 금액 (USD) |
| balance_before | REAL | 거래 전 잔액 (USD) |
| balance_after | REAL | 거래 후 잔액 (USD) |
| payment_method | TEXT | 결제 수단: paypal, smilepay, usdt. 구매/환불 시만 |
| payment_tx_id | TEXT | PG 거래 ID (PayPal/SmileyPay) 또는 블록체인 tx hash (USDT). 구매/환불 시만 |
| crypto_currency | TEXT | 암호화폐 종류 (USDT 결제 시만) |
| crypto_network | TEXT | 네트워크 (tron, ethereum 등. USDT 결제 시만) |
| crypto_amount | REAL | 암호화폐 금액 (USDT 결제 시만) |
| exchange_rate | REAL | 거래 시점 환율 (USD→결제통화). PayPal/SmileyPay: 1.0, USDT: USD→USDT 환율 |
| settled | INTEGER | 정산 완료 여부 (0/1, DEFAULT 0) |
| note | TEXT | 비고 |
| created_at | TEXT (ISO8601) | 거래일시 |

> settled = 1인 거래는 정산 완료 (settlement_transactions에 연결됨). 재정산 불가.

### 9.6 가맹점 실결제 내역 (merchant_settlements) - 수동 입력
| 필드 | 타입 | 설명 |
|------|------|------|
| merchant_settlement | INTEGER | PK AUTOINCREMENT |
| transaction | INTEGER | FK → transactions (NULL 가능: 연결 거래 없이 단독 입력 가능) |
| merchant | INTEGER | FK → merchants |
| settlement_type | TEXT | cash, bank_transfer, crypto, other |
| fiat_currency | TEXT | 법정화폐 종류 (KRW, USD 등) |
| fiat_amount | REAL | 실제 결제/정산 금액 (법정화폐) |
| crypto_currency | TEXT | 암호화폐 종류 (해당 시) |
| crypto_network | TEXT | 네트워크 (해당 시) |
| crypto_amount | REAL | 암호화폐 금액 (해당 시) |
| exchange_rate | REAL | 정산 시점 환율 |
| note | TEXT | 메모 |
| settled_at | TEXT (ISO8601) | 실결제 일시 |
| created_at | TEXT (ISO8601) | 입력일시 |

### 9.7 가맹점-기프티 연결 (merchant_voucher_templates)
| 필드 | 타입 | 설명 |
|------|------|------|
| merchant_voucher_template | INTEGER | PK AUTOINCREMENT |
| merchant | INTEGER | FK → merchants |
| voucher_template | INTEGER | FK → voucher_templates |
| created_at | TEXT (ISO8601) | 연결일 |

### 9.8 정산 (settlements) - 월별 자동 정산
| 필드 | 타입 | 설명 |
|------|------|------|
| settlement | INTEGER | PK AUTOINCREMENT |
| merchant | INTEGER | FK → merchants |
| period_year | INTEGER | 정산 대상 연도 (예: 2026) |
| period_month | INTEGER | 정산 대상 월 (예: 2) |
| total_amount | REAL | 정산 총액 USD (해당 월 사용 처리 합계) |
| transaction_count | INTEGER | 정산 대상 거래 건수 |
| status | TEXT | pending, processing, completed, failed, write_off |
| scheduled_date | TEXT (ISO8601) | 정산 예정일 (익월 지정일) |
| completed_at | TEXT (ISO8601) | 실제 정산 완료일 |
| crypto_currency | TEXT | 정산 통화 |
| crypto_network | TEXT | 정산 네트워크 |
| crypto_amount | REAL | 정산 암호화폐 금액 |
| crypto_tx_hash | TEXT | 정산 트랜잭션 해시 |
| exchange_rate | REAL | 정산 시점 환율 |
| note | TEXT | 비고 (분쟁/소멸 사유 등) |
| created_at | TEXT (ISO8601) | 생성일 |
| updated_at | TEXT (ISO8601) | 수정일 |

> UNIQUE(merchant, period_year, period_month) — 가맹점별 월 1건

### 9.9 정산-거래 연결 (settlement_transactions)
| 필드 | 타입 | 설명 |
|------|------|------|
| settlement_transaction | INTEGER | PK AUTOINCREMENT |
| settlement | INTEGER | FK → settlements |
| transaction | INTEGER | FK → transactions (UNIQUE, 중복 정산 방지) |

> 어떤 거래가 어떤 정산에 포함되었는지 추적
> transaction에 UNIQUE 걸어 이중 정산 원천 차단

### 9.10 낙전 수익 (forfeitures)
| 필드 | 타입 | 설명 |
|------|------|------|
| forfeiture | INTEGER | PK AUTOINCREMENT |
| voucher | INTEGER | FK → vouchers (UNIQUE) |
| amount | REAL | 낙전 금액 USD (만료 시점 잔액) |
| forfeited_at | TEXT (ISO8601) | 낙전 처리일 |
| created_at | TEXT (ISO8601) | 기록일 |

### 9.11 사전 매입 (bulk_purchases)
| 필드 | 타입 | 설명 |
|------|------|------|
| bulk_purchase | INTEGER | PK AUTOINCREMENT |
| merchant | INTEGER | FK → merchants |
| voucher_template | INTEGER | FK → voucher_templates |
| total_amount | REAL | 매입 총액 (USD) |
| issued_amount | REAL | 발행된 금액 누적 (USD) |
| remaining_amount | REAL | 잔여 매입 가능 금액 (USD) |
| status | TEXT | active, exhausted, cancelled |
| purchased_at | TEXT (ISO8601) | 매입일 |
| note | TEXT | 매입 계약 메모 |
| created_at | TEXT (ISO8601) | 생성일 |
| updated_at | TEXT (ISO8601) | 수정일 |

> remaining_amount = total_amount - issued_amount
> remaining_amount <= 0 이면 status → exhausted, 추가 발행 불가

### 9.12 내부 환율표 (exchange_rates)
| 필드 | 타입 | 설명 |
|------|------|------|
| exchange_rate | INTEGER | PK AUTOINCREMENT |
| quote_currency | TEXT | 대상 통화 (UNIQUE). 예: "xrun", "krw", "usd", "jpy" |
| rate | REAL | 환율: 1 USD = ? quote_currency |
| source | TEXT | auto (API 자동), manual (관리자 수동) |
| fetched_at | TEXT (ISO8601) | 데이터 수집/수정 시각 |
| created_at | TEXT (ISO8601) | 최초 저장 시각 |

> **base_currency는 항상 USD** (컬럼 불필요, 고정값)
> UNIQUE(quote_currency) — 통화당 최신 1건만 유지
> source = "manual"인 행은 Cron 갱신 시 덮어쓰지 않음 (관리자 설정 보호)
> 이전 환율 이력 필요 시 exchange_rate_history 테이블로 분리 가능

### 9.9 관리자 (admins)
| 필드 | 타입 | 설명 |
|------|------|------|
| admin | INTEGER | PK AUTOINCREMENT |
| email | TEXT | 이메일 (UNIQUE) |
| password_hash | TEXT | 비밀번호 해시 |
| name | TEXT | 이름 |
| role | TEXT | super_admin, admin |
| created_at | TEXT (ISO8601) | 생성일 |
| updated_at | TEXT (ISO8601) | 수정일 |

### 9.10 시스템 설정 (system_settings)
| 필드 | 타입 | 설명 |
|------|------|------|
| system_setting | INTEGER | PK AUTOINCREMENT |
| key | TEXT | 설정 키 (UNIQUE) |
| value | TEXT | 설정 값 |
| description | TEXT | 설명 |
| updated_at | TEXT (ISO8601) | 수정일 |

> 주요 설정 키:

| key | 기본값 | 설명 |
|-----|-------|------|
| `default_purchase_limit` | `999999999` | 기본 1회 구매 한도 (매우 큰 값) |
| `default_daily_purchase_limit` | `999999999` | 기본 1일 구매 한도 |
| `default_monthly_purchase_limit` | `999999999` | 기본 월간 구매 한도 |
| `settlement_day` | `15` | 정산 지급일 (익월 N일) |
| `min_voucher_amount` | `1000` | 최소 기프티 금액 |

> 기프티 자체 최대 금액 제한 없음. 사용자별 한도로만 관리.

### 9.13 중고거래 목록 (marketplace_listings)
| 필드 | 타입 | 설명 |
|------|------|------|
| marketplace_listing | INTEGER | PK AUTOINCREMENT |
| voucher | INTEGER | FK → vouchers (UNIQUE while active) |
| seller_account | INTEGER | FK → accounts |
| asking_price | REAL | 판매 희망가 (USD) |
| platform_fee | REAL | 수수료 금액 (asking_price × 0.05) |
| status | TEXT | active, sold, cancelled, expired |
| buyer_account | INTEGER | FK → accounts (구매자, 체결 후) |
| sold_at | TEXT (ISO8601) | 판매 완료일 |
| crypto_tx_hash_in | TEXT | 구매자→플랫폼 트랜잭션 해시 |
| crypto_tx_hash_out | TEXT | 플랫폼→판매자 트랜잭션 해시 |
| created_at | TEXT (ISO8601) | 등록일 |
| updated_at | TEXT (ISO8601) | 수정일 |

> - voucher는 active 상태의 listing에 대해 UNIQUE (동시 중복 등록 방지)
> - 판매 완료 시: status → sold, buyer_account 기록, sold_at 기록
> - 판매 취소 시: status → cancelled, 연결 기프티 status → active 복원
> - 기프티 만료 시: status → expired 자동 전환

## 10. API 엔드포인트 (Hono)

### 10.1 인증
| Method | Path | 설명 |
|--------|------|------|
| POST | /api/auth/register | 회원가입 (account_type 필수) |
| POST | /api/auth/login | 로그인 |
| POST | /api/auth/refresh | 토큰 갱신 |
| GET | /api/auth/me | 내 정보 (계정 타입 포함) |
| POST | /api/auth/push-token | 푸시 토큰 등록/갱신 (platform + token) |
| POST | /api/auth/device | 디바이스 ID 등록/갱신 (QR seed용) |

### 10.2 기프티 (사용자 계정 전용)
| Method | Path | 설명 |
|--------|------|------|
| GET | /api/vouchers | 내 기프티 목록 |
| GET | /api/vouchers/:id | 기프티 상세 |
| POST | /api/vouchers/purchase | 기프티 구매 |
| POST | /api/vouchers/:id/transfer | 기프티 양도 (수신자 이메일) |
| POST | /api/vouchers/:id/transfer/search | 양도 수신자 검색 (마스킹 결과 반환) |
| POST | /api/vouchers/:id/refund | 환불 요청 |
| GET | /api/vouchers/:id/qr | QR 바이너리 조회 (암호화된 페이로드) |
| POST | /api/vouchers/:id/qr/refresh | QR 수동 갱신 (분실/유출 대응) |
| GET | /api/vouchers/:id/history | 기프티 이력 조회 |

### 10.3 스토어 (사용자 계정 전용)
| Method | Path | 설명 |
|--------|------|------|
| GET | /api/store/templates | 구매 가능 기프티 목록 |
| GET | /api/store/templates/:id | 기프티 상세 정보 |
| GET | /api/store/merchants | 가맹점 목록 |

### 10.4 가맹점 (가맹점 계정 전용)
| Method | Path | 설명 |
|--------|------|------|
| POST | /api/merchant/scan | QR 바이너리 수신 → 서버 복호화 → 기프티 정보 반환 |
| POST | /api/merchant/use | 사용 처리 (전액 또는 일부 금액 지정) |
| GET | /api/merchant/transactions | 사용 내역 |
| GET | /api/merchant/settlements | 실결제 내역 조회 |
| POST | /api/merchant/settlements | 실결제 내역 수동 입력 |
| GET | /api/merchant/profile | 가맹점 프로필 조회 |
| PUT | /api/merchant/profile | 가맹점 프로필 수정 |

### 10.5 결제
| Method | Path | 설명 |
|--------|------|------|
| GET | /api/payment/methods | 지원 결제 수단 목록 (paypal, smilepay, usdt) |
| GET | /api/payment/exchange-rate | 현재 환율 조회 (D1 캐시) |
| POST | /api/payment/create | 결제 생성 (결제 수단 선택) |
| GET | /api/payment/:id/status | 결제 상태 확인 |
| POST | /api/payment/webhook/paypal | PayPal 결제 콜백 |
| POST | /api/payment/webhook/smilepay | SmileyPay 결제 콜백 |
| POST | /api/payment/webhook/crypto | 암호화폐 결제 콜백 (블록체인 확인) |

### 10.6 관리자
| Method | Path | 설명 |
|--------|------|------|
| POST | /api/admin/auth/login | 관리자 로그인 |
| GET | /api/admin/dashboard | 대시보드 통계 |
| CRUD | /api/admin/voucher-templates | 기프티 템플릿 관리 |
| CRUD | /api/admin/merchants | 가맹점 관리 |
| POST | /api/admin/merchants/:id/approve | 가맹점 승인 |
| CRUD | /api/admin/accounts | 계정 관리 |
| POST | /api/admin/accounts/:id/restrict | 사용자 제한 (한도 설정 + restricted 상태) |
| POST | /api/admin/accounts/:id/suspend | 사용자 정지 (suspended) |
| POST | /api/admin/accounts/:id/activate | 사용자 제한/정지 해제 (active 복원) |
| GET | /api/admin/accounts/restricted | 제한/정지 사용자 목록 (한눈에 확인) |
| CRUD | /api/admin/system-settings | 시스템 기본 설정 관리 |
| GET | /api/admin/transactions | 전체 거래 내역 (자동 로그) |
| GET | /api/admin/settlements | 전체 실결제 내역 (수동 로그) |
| POST | /api/admin/refunds/:id/approve | 환불 승인 |
| POST | /api/admin/refunds/:id/reject | 환불 거절 |
| GET | /api/admin/settlements | 월별 정산 목록 |
| GET | /api/admin/settlements/:id | 정산 상세 (포함 거래 목록) |
| POST | /api/admin/settlements/generate | 정산 생성 (대상 월 지정) |
| POST | /api/admin/settlements/:id/process | 정산 실행 (입금 처리) |
| POST | /api/admin/settlements/:id/write-off | 정산 소멸 처리 |
| GET | /api/admin/forfeitures | 낙전 수익 목록 |
| GET | /api/admin/forfeitures/summary | 낙전 수익 집계 (기간별) |
| CRUD | /api/admin/bulk-purchases | 사전 매입 관리 |
| GET | /api/admin/exchange-rates | 현재 캐시된 환율 조회 |
| POST | /api/admin/exchange-rates/refresh | 수동 환율 갱신 |

### 10.7 OTA 업데이트
| Method | Path | 설명 |
|--------|------|------|
| GET | /api/ota/check | 업데이트 확인 (앱 버전 기반) |
| GET | /api/ota/manifest | 최신 매니페스트 조회 |

### 10.8 중고마켓 (사용자 계정 전용)
| Method | Path | 설명 |
|--------|------|------|
| GET | /api/marketplace | 중고마켓 목록 (필터/정렬/검색) |
| GET | /api/marketplace/:id | 판매 상품 상세 |
| POST | /api/marketplace/sell | 판매 등록 (내 기프티) |
| DELETE | /api/marketplace/:id | 판매 취소 |
| POST | /api/marketplace/:id/buy | 구매 (PayPal/SmileyPay/USDT 결제) |
| GET | /api/marketplace/my-listings | 내 판매 목록 |
| GET | /api/marketplace/my-purchases | 내 구매 내역 |

### 10.9 관리자 - 중고마켓
| Method | Path | 설명 |
|--------|------|------|
| GET | /api/admin/marketplace | 중고거래 전체 목록 |
| GET | /api/admin/marketplace/fees | 수수료 수익 집계 |

## 11. 화면 구성

### 11.1 통합 앱 - 공통 화면
| 화면 | 설명 |
|------|------|
| 스플래시 | OTA 업데이트 체크 |
| 로그인 | 이메일/비밀번호 로그인 |
| 회원가입 | **계정 타입 선택 (사용자/가맹점)** → 정보 입력 |

### 11.2 통합 앱 - 사용자 계정 화면
| 화면 | 설명 |
|------|------|
| 홈 | 보유 기프티 목록, 잔액 요약, 스토어 바로가기/추천 기프티 |
| 기프티 스토어 | 구매 가능한 기프티 목록 (홈 탭 내 진입) |
| 기프티 상세 | QR코드 표시, 잔액, 사용 이력 |
| 구매 | 통화/네트워크 선택, 환율 표시, 암호화폐 결제 |
| 양도 | 수신자 지정, 양도 확인 |
| 중고마켓 목록 | 판매 중인 기프티 검색, 필터, 정렬 |
| 중고 상품 상세 | 판매자 정보 마스킹, 기프티 정보, 구매 버튼 |
| 판매 등록 | 가격 입력, 수수료 미리보기, 등록 확인 |
| 내 판매/구매 내역 | 중고마켓 판매/구매 거래 이력 |
| 사용 내역 | 전체 거래 이력 |
| 마이페이지 | 프로필, 지갑 관리 |

### 11.3 통합 앱 - 가맹점 계정 화면
| 화면 | 설명 |
|------|------|
| QR 스캔 | 카메라로 QR코드 스캔 → 기프티 정보 표시 |
| 사용 처리 | 기프티 정보 확인, 사용 금액 입력 (전액/일부), 처리 확인 |
| 사용 내역 | 일별/월별 사용 처리 내역 |
| 정산 | 정산 현황, 실결제 내역 목록, 수동 입력 |
| 가맹점 설정 | 가맹점 프로필, 정산 지갑 관리 |

### 11.4 관리자 웹 (Pages 서빙)
| 화면 | 설명 |
|------|------|
| 로그인 | 관리자 전용 로그인 |
| 대시보드 | 통계, 차트, 주요 지표, 현재 환율 |
| 기프티 관리 | 템플릿 CRUD, 발행 현황 |
| 가맹점 관리 | 가맹점 CRUD, 승인/거절, 상태 관리 |
| 계정 관리 | 계정 목록, 상세, 타입별 필터, 한도 설정, 제한/정지/해제 |
| 제한 사용자 | 현재 restricted/suspended 사용자 목록, 사유, 즉시 조치 |
| 거래 내역 | 전체 자동 거래 조회, 필터 |
| 실결제 내역 | 가맹점 수동 입력 내역 조회, 자동 로그 대조 |
| 환불 관리 | 환불 요청 목록, 승인/거절 |
| 정산 관리 | 월별 정산 목록, 정산 생성/실행/소멸, 상세 거래 조회 |
| 낙전 관리 | 만료 기프티 낙전 수익 집계, 기간별 조회 |
| 사전 매입 관리 | 매입 계약 CRUD, 잔액 현황, 발행 이력 |
| 환율 관리 | 현재 캐시 환율, 수동 갱신, 이력 조회 |
| 중고거래 관리 | 전체 중고거래 목록, 거래 상태, 수수료 수익 집계 |
| OTA 관리 | 앱 번들 업로드, 버전 관리 |
| API 테스트 | API 엔드포인트 테스트 페이지 |

## 12. 보안 요구사항

- **QR코드 AES-256-GCM 암호화 바이너리** (서버만 복호화 가능)
- QR 토큰 1회용, 사용/양도 시 무효화 및 재발급
- 앱에 복호화 키 미포함 (서버 전달 방식)
- QR_ENCRYPTION_KEY 주기적 로테이션
- API 인증 (JWT)
- 계정 타입별 API 접근 제어 (Hono middleware)
- 결제 검증 (PayPal/SmileyPay webhook + USDT 블록체인 트랜잭션)
- 관리자 2FA 권장
- HTTPS 필수 (Cloudflare 기본 제공)
- 중요 데이터 암호화 저장
- Workers 환경변수로 시크릿 관리 (QR_ENCRYPTION_KEY, JWT_SECRET 등)
- on_sale 상태 기프티는 사용/양도/환불 차단 (동시 거래 방지)
- 중고거래 구매 시 결제 확인(PG 콜백 또는 블록체인 확인) 완료 후에만 소유권 이전
- 판매자 본인 구매 차단

## 13. D1 제약사항 및 대응

| 제약 | 대응 방안 |
|------|----------|
| 단일 리전 쓰기 | 읽기 복제로 읽기 성능 확보 |
| 최대 DB 크기 제한 | 오래된 로그/거래는 R2로 아카이빙 |
| SQLite 타입 제한 | TEXT로 JSON, ISO8601 저장 |
| 동시 쓰기 제한 | 트랜잭션 충돌 시 재시도 로직 |
| INTEGER PK | AUTOINCREMENT로 순차 ID 생성 |

## 14. 미결정 사항 (TBD)

- [x] ~~결제 수단 선택~~ → PayPal(글로벌) + SmileyPay(동남아) 기본, USDT 보조
- [x] ~~환불 시 환율 정책~~ → 원결제 수단으로 환불 + 가맹점 수동 입력 (2중 로깅)
- [x] ~~Workers 라우터 선택~~ → Hono
- [x] ~~환율 API 선택~~ → fawazahmed0/exchange-api (Primary) + CoinGecko (Fallback)
- [x] ~~정산 주기 및 방식~~ → 월 1회 익월 지정일 정산, 만료 잔액은 낙전 수익
- [x] ~~기프티 최대 금액 제한~~ → 기프티 자체는 무제한, 사용자별 한도로 개별 관리
- [x] ~~양도 수수료 유무~~ → 양도 수수료 없음 (무료 양도)
- [x] ~~푸시 알림 방식~~ → FCM (Android) + APNs (iOS) 네이티브 푸시
- [x] ~~오프라인 사용 대응 방안~~ → 오프라인 시 캐싱된 목록/QR 조회만 가능, 사용(결제) 불가
- [x] ~~OTA 라이브러리 선택~~ → expo-updates (커스텀 서버: CF R2)
- [ ] 가맹점 신청 시 필요 서류/절차
- [ ] PayPal Business 계정 설정 및 API 키
- [ ] SmileyPay 가맹점 연동 설정
- [ ] Tron 네트워크 컨펌 수 설정값 (USDT 보조 결제용)