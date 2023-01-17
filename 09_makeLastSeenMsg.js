//사용자의 이름과 미접속 시간(분)을 입력받아 조건별로 다른 메세지를 리턴
//미접속 시간이 1시간 보다 적을 경우, 분 단위로 표기합니다.
//미접속 시간이 1시간 보다 크고 24시간 보다 적을 경우, 시간 단위로 내림처리하여 표기합니다.
//미접속 시간이 24시간 보다 클 경우, 일 단위로 내림처리하여 표기합니다.
function makeLastSeenMsg(name, period) {
    const day = 60 * 24;
    const hour = 60;
    if (period >= day) {
      return `${name}: ${Math.floor(period / day)}일 전에 접속함`; //Math.floor(period/60); period를 60으로 나누면 '시간'이 나온다
    } else if (period >= hour) {
      return `${name}: ${Math.floor(period / hour)}시간 전에 접속함`; //Math.floor(hour/24); 시간을 24로 나누면 '일'이 나온다
    } else {
      return `${name}: ${period}분 전에 접속함`;
    }
  }