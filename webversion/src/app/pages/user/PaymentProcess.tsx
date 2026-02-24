import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import { UserLayout } from "../../components/UserLayout";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { ArrowLeft, Clock, Loader2 } from "lucide-react";

interface PaymentState {
  paymentMethod: string;
  totalAmount: number;
  productName: string;
  quantity: number;
}

export function PaymentProcess() {
  const navigate = useNavigate();
  const location = useLocation();
  
  const [state, setState] = useState<PaymentState | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [timeLeft, setTimeLeft] = useState(900); // 15분 = 900초
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    console.log("=== PaymentProcess useEffect ===");
    console.log("location.state:", location.state);

    // location.state 먼저 확인
    if (location.state) {
      console.log("Using location.state");
      setState(location.state as PaymentState);
      setIsLoading(false);
      return;
    }

    // sessionStorage에서 데이터 가져오기
    const savedData = sessionStorage.getItem("paymentData");
    console.log("savedData from sessionStorage:", savedData);

    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        console.log("Parsed payment data:", parsedData);
        setState(parsedData);
        // 사용 후 삭제
        sessionStorage.removeItem("paymentData");
      } catch (error) {
        console.error("Failed to parse payment data:", error);
      }
    }

    setIsLoading(false);
  }, [location.state]);

  useEffect(() => {
    if (!state) return;

    // 타이머
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // 프로그레스 바 애니메이션 (60% 정도까지만)
    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 60) {
          clearInterval(progressTimer);
          return prev;
        }
        return prev + 1;
      });
    }, 200);

    return () => {
      clearInterval(timer);
      clearInterval(progressTimer);
    };
  }, [state]);

  // 로딩 중
  if (isLoading) {
    return (
      <UserLayout>
        <div className="max-w-lg mx-auto">
          <div className="bg-white border-b p-4 flex items-center">
            <button onClick={() => navigate(-1)} className="mr-3">
              <ArrowLeft className="w-6 h-6" />
            </button>
            <h1 className="text-lg font-semibold">결제 진행</h1>
          </div>
          <div className="p-4">
            <Card>
              <CardContent className="p-8 text-center">
                <p className="text-gray-600">로딩 중...</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </UserLayout>
    );
  }

  // state가 없으면 스토어로 돌아가기
  if (!state || !state.totalAmount) {
    console.error("Missing payment data:", state);
    return (
      <UserLayout>
        <div className="max-w-lg mx-auto">
          <div className="bg-white border-b p-4 flex items-center">
            <button onClick={() => navigate("/user/store")} className="mr-3">
              <ArrowLeft className="w-6 h-6" />
            </button>
            <h1 className="text-lg font-semibold">결제 진행</h1>
          </div>
          <div className="p-4">
            <Card>
              <CardContent className="p-8 text-center">
                <p className="text-gray-600 mb-4">결제 정보를 불러올 수 없습니다.</p>
                <p className="text-sm text-gray-500 mb-4">
                  구매 페이지에서 다시 시도해주세요.
                </p>
                <Button
                  onClick={() => navigate("/user/store")}
                  className="bg-orange-600 hover:bg-orange-700"
                >
                  스토어로 돌아가기
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </UserLayout>
    );
  }

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const handleCancel = () => {
    if (confirm("결제를 취소하시겠습니까?")) {
      navigate("/user/store");
    }
  };

  const getPaymentMethodName = () => {
    switch (state.paymentMethod) {
      case "paypal":
        return "PayPal";
      case "smileypay":
        return "SmileyPay";
      case "usdt":
        return "USDT";
      default:
        return "PayPal";
    }
  };

  return (
    <UserLayout>
      <div className="max-w-lg mx-auto min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white border-b p-4 flex items-center">
          <button onClick={() => navigate(-1)} className="mr-3">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-lg font-semibold">결제 진행</h1>
        </div>

        <div className="p-4 space-y-4">
          {/* 결제 정보 카드 */}
          <Card>
            <CardContent className="p-6 text-center">
              <div className="mb-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">💳</span>
                </div>
                <h2 className="text-lg font-semibold mb-2">
                  {getPaymentMethodName()} 결제 페이지로
                </h2>
                <p className="text-gray-600 mb-4">이동합니다</p>
              </div>

              <div className="border-t pt-4">
                <p className="text-sm text-gray-500 mb-1">결제 금액</p>
                <p className="text-3xl font-bold text-gray-900">
                  ${state.totalAmount.toLocaleString()}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  ₩{(state.totalAmount * 1300).toLocaleString()}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* 결제 승인 대기 */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Loader2 className="w-5 h-5 text-orange-600 animate-spin" />
                <h3 className="font-semibold">결제 승인 대기 중...</h3>
              </div>

              {/* 프로그레스 바 */}
              <div className="mb-4">
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-orange-600 h-full transition-all duration-200 ease-out"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <p className="text-sm text-gray-600 mt-2 text-center">
                  {getPaymentMethodName()} 결제 확인 중...
                </p>
              </div>

              {/* 상품 정보 */}
              <div className="bg-gray-50 rounded-lg p-3 text-sm">
                <div className="flex justify-between mb-1">
                  <span className="text-gray-600">상품명</span>
                  <span className="font-medium">{state.productName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">수량</span>
                  <span className="font-medium">{state.quantity}개</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 남은 시간 */}
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-orange-600" />
                  <span className="font-medium">남은 시간</span>
                </div>
                <span className="text-2xl font-bold text-orange-600">
                  {String(minutes).padStart(2, "0")}:
                  {String(seconds).padStart(2, "0")}
                </span>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                시간 내에 결제를 완료해주세요
              </p>
            </CardContent>
          </Card>

          {/* 결제 취소 버튼 */}
          <Button
            onClick={handleCancel}
            variant="outline"
            className="w-full h-12 text-base border-2 border-gray-300 hover:bg-gray-50"
          >
            결제 취소
          </Button>

          {/* 안내 메시지 */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm text-blue-900">
              💡 {getPaymentMethodName()} 창에서 결제를 완료하시면 자동으로
              처리됩니다.
            </p>
          </div>
        </div>
      </div>
    </UserLayout>
  );
}