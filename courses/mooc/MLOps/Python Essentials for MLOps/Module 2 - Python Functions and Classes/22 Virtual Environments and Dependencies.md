# Virtual Environments and Dependencies

## 개요
- Python 패키징이 근본적으로 까다롭다는 점을 전제로, `venv` 모듈로 가상환경을 만들고 활성화·비활성화하는 법, `pip`으로 의존성을 설치하는 법, `requirements.txt`로 여러 의존성을 한 번에 관리하는 법을 실습으로 다룬다.

## 내용

### 왜 가상환경이 필요한가
- **"Python은 패키징 면에서 문제가 있다"** — 의존성 설치와 관리가 전반적으로 까다롭다는 점을 먼저 짚는다.
- 의존성을 설치하려면 **어떤 형태로든 가상환경(virtual environment)을 사용해야 한다.**

### 가상환경 생성과 활성화
- `python3 -m venv 이름`으로 가상환경을 만든다 — 내부에 매우 많은 파일이 생성된다.
- 문제가 생기면 **그냥 디렉토리를 통째로 지우고 새로 만들면 된다** — 격리되어 있어(self-contained) 안전하게 실험 가능.
- **생성만으로는 활성화되지 않는다** — `source venv/bin/activate`(Mac/Linux)로 활성화해야 하며, 활성화되면 셸 프롬프트에 가상환경 이름이 표시된다. (Windows는 PowerShell용 스크립트가 별도로 있음)
- 활성화 후 `which python`, `which pip`으로 확인하면, 시스템 기본 Python이 아니라 **그 가상환경 디렉토리 안의 python/pip을 가리키게 된다.**

### 의존성 설치 — `pip`
- `pip install 패키지명`(예: `flask`)으로 그 가상환경 안에만 패키지를 설치한다 — 설치된 패키지는 `venv/lib/pythonX.X/site-packages` 안에 위치.
- Flask를 설치하면 `jinja2`, `click` 같은 하위 의존성도 함께 설치되는 것을 확인할 수 있다.

### `requirements.txt`로 여러 의존성 한 번에 관리
- 의존성이 여러 개면 `requirements.txt` 파일에 패키지 이름들을 나열해두는 것이 유용하다.
- `pip install -r requirements.txt`로 파일에 나열된 모든 의존성을 한 번에 설치할 수 있다 (하나씩 설치하는 대신).

### 비활성화와 재사용
- `deactivate`로 가상환경에서 빠져나오면, `which python`/`which pip`이 다시 시스템(또는 conda 등) 기본 경로를 가리킨다.
- 새 프로젝트에는 `python3 -m venv 다른이름`으로 또 다른 독립된 가상환경을 만들면 된다.

## 예시
```bash
# 가상환경 생성
python3 -m venv venv

# 활성화 (Mac/Linux)
source venv/bin/activate

# 어떤 python/pip이 쓰이는지 확인
which python
which pip

# 의존성 설치
pip install flask

# requirements.txt로 일괄 설치
echo "flask" > requirements.txt
pip install -r requirements.txt

# 비활성화
deactivate
```

## 요약
- Python 패키징은 본질적으로 까다로우므로 항상 가상환경을 통해 의존성을 설치·관리해야 한다.
- `python3 -m venv 이름`으로 생성, `source 이름/bin/activate`로 활성화, `pip install`로 설치, `deactivate`로 종료 — 문제가 생기면 디렉토리를 지우고 처음부터 다시 만들면 된다.
- 여러 의존성은 `requirements.txt` + `pip install -r`로 한 번에 관리하는 것이 편리하다.
