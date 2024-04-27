import { Button } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';
import {articleList} from '../../../types/articleProps';
import { useEffect, useState } from 'react';


const Read = () => {
	const baseUrl = import.meta.env.VITE_APP_PUBLIC_BASE_URL;
	const navigate = useNavigate();
	const handleArticles = (articles: articleList[]) => {
		navigate('/mypage/read', { state: { articles } });
	};

	// const [articles, setArticles] = useState<articleList[]>();
	// // 내가 읽은 글 받아오기
	// const myArticleData = async () => {
	// 	const data = await fetch(`${baseUrl}/myArticle`).then((response) => response.json());
	// 	return data;
	// };

	// useEffect(() => {
	// 	myArticleData()
	// 		.then((res) => setArticles(res))
	// 		.catch((err) => {
	// 			console.log('내가 읽은 글 받아오는거 에러');
	// 		});
	// }, []);

	const articles: articleList[] = [
		{
			articleId: 1,
			title: '문법',
			content:
				'두 명제가 모두 참인 것도 모두 거짓인 것도 가능하지 않은 관계를 모순 관계라고 한다. 예를 들어, 임의의 명제를 P라고 하면 P와 ～P는 모순 관계이다.(기호 ‘～’은 부정을 나타낸다.) P와 ～P가 모두 참인 것은 가능하지 않다는 법칙을 무모순율 이라고 한다. 그런데 “㉠(다보탑은 경주에 있다.)”와 “㉡(다보탑은 개성에 있을 수도 있었다.)”는 모순 관계가 아니다. 현실과 다르게 다보탑을 경주가 아닌 곳에 세웠다면 다보탑의 소재지는 지 금과 달라졌을 것이다. 철학자들은 이를 두고, P와 ～P가 모두 참인 혹은 모두 거짓인 가능세계는 없지만 다보탑이 개성에 있는 가능세계는 있다고 표현한다. \n ‘가능세계’의 개념은 일상 언어에서 흔히 쓰이는 필연성과 가능 성에 관한 진술을 분석하는 데 중요한 역할을 한다. ‘P는 가능 하다’는 P가 적어도 하나의 가능세계에서 성립한다는 뜻이며, ‘P는 필연적이다’는 P가 모든 가능세계에서 성립한다는 뜻이다. “만약 Q이면 Q이다.”를 비롯한 필연적인 명제들은 모든 가능 세계에서 성립한다. “다보탑은 경주에 있다.”와 같이 가능하지만 필연적이지는 않은 명제는 우리의 현실세계를 비롯한 어떤 가능 세계에서는 성립하고 또 어떤 가능세계에서는 성립하지 않는다.\n 가능세계를 통한 담론은 우리의 일상적인 몇몇 표현들을 보다 잘 이해하는 데 도움이 된다. 다음 상황을 생각해 보자. 나는 현실에서 아침 8시에 출발하는 기차를 놓쳤고, 지각을 했으며, 내가 놓친 기차는 제시간에 목적지에 도착했다. 그리고 나는 “만약 내가 8시 기차를 탔다면, 나는 지각을 하지 않았다.”라고 주장한다. 그런데 전통 논리학에서는 “만약 A이면 B이다.”라는 형식의 명제는 A가 거짓인 경우에는 B의 참 거짓에 상관없이 참이라고 규정한다. 그럼에도 ⓐ (내가 만약 그 기차를 탔다면 여전히 지각을 했을 것이라고 주장하지는 않는 이유는 무엇일 까?) 내가 그 기차를 탄 가능세계들을 생각해 보면 그 이유를 알 수 있다. 그 가능세계 중 어떤 세계에서 나는 여전히 지각 을 한다. 가령 내가 탄 그 기차가 고장으로 선로에 멈춰 운행이 오랫동안 지연된 세계가 그런 예이다. 하지만 내가 기차를 탄 세계들 중에서, 내가 기차를 타고 별다른 이변 없이 제시간에 도착한 세계가 그렇지 않은 세계보다 우리의 현실세계와의 유 사성이 더 높다. 일반적으로, A가 참인 가능세계들 중에 비교 할 때, B도 참인 가능세계가 B가 거짓인 가능세계보다 현실세 계와 더 유사하다면, 현실세계의 나는 A가 실현되지 않은 경우 에, 만약 A라면 ～B가 아닌 B이라고 말할 수 있다.\n 가능세계는 다음의 네 가지 성질을 갖는다. 첫째는 가능세계의 일관성이다. 가능세계는 명칭 그대로 가능한 세계이므로 어떤 것이 가능하지 않다면 그것이 성립하는 가능세계는 없다. 둘째는 가능세계의 포괄성이다. 이것은 어떤 것이 가능하다면 그것이 성립하는 가능세계는 존재한다는 것이다. 셋째는 가능세계의 완결성이다. 어느 세계에서든 임의의 명제 P에 대해 “P이거나 ～P이다.”라는 배중률이 성립한다. 즉 P와 ～P 중 하나는 반드 시 참이라는 것이다. 넷째는 가능세계의 독립성이다. 한 가능세 계는 모든 시간과 공간을 포함해야만 하며, 연속된 시간과 공간 에 포함된 존재들은 모두 동일한 하나의 세계에만 속한다. 이 문제지에 관한 저작권은 한국교육과정평가원에 있습니다. 한 가능세계 W1의 시간과 공간이, 다른 가능세계 W2의 시간과 공간으로 이어질 수는 없다. W1과 W2는 서로 시간과 공간이 전혀 다른 세계이다.\n 가능세계의 개념은 철학에서 갖가지 흥미로운 질문과 통찰을 이끌어 내며, 그에 관한 연구 역시 활발히 진행되고 있다. 나아가 가능세계를 활용한 논의는 오늘날 인지 과학, 언어학, 공학 등의 분야로 그 응용의 폭을 넓히고 있다다.',

			type: '비문학',
			categoryName: '시사',
			hits: 526,
			reporter: '오영주',
		},
		{
			articleId: 1,
			title: 'DNS 스푸핑이 이루어지는 과정',
			content:
				'DNS(도메인 네임 시스템) 스푸핑은 인터넷 사용자가 어떤 사이트에 접속하려 할 때 사용자를 위조 사이트로 접속시키는 행위를 말한다. 이는 도메인 네임을 IP 주소로 변환해 주는 과 정에서 이루어진다. 인터넷에 연결된 컴퓨터들이 서로를 식별하고 통신하기 위 해서 각 컴퓨터들은 IP(인터넷 프로토콜)에 따라 ㉠ (만들어지는) 고유 IP 주소를 가져야 한다. 프로토콜은 컴퓨터들이 연결되어 서로 데이터를 주고받기 위해 사용하는 통신 규약으로 소프트 웨어나 하드웨어로 구현된다. 현재 주로 사용하는 IP 주소는 ‘.126.63.1’처럼 점으로 구분된 4개의 필드에 숫자를 사용 하여 ㉡ (나타낸다.) 이 주소를 중복 지정하거나 임의로 지정해 서는 안 되고 공인 IP 주소를 부여받아야 한다. 공인 IP 주소에는 동일한 번호를 지속적으로 사용하는 고정 IP 주소와 번호가 변경되기도 하는 유동 IP 주소가 있다. 유동 IP 주소는 DHCP라는 프로토콜에 의해 부여된다. DHCP는 IP 주소가 필요한 컴퓨터의 요청을 받아 주소를 할당해 주고, 컴 퓨터가 IP 주소를 사용하지 않으면 주소를 반환받아 다른 컴 퓨터가 그 주소를 사용할 수 있도록 해 준다. 한편, 인터넷에 직접 접속은 안 되고 내부 네트워크에서만 서로를 식별할 수 있는 사설 IP 주소도 있다. 인터넷은 공인 IP 주소를 기반으로 동작하지만 우리가 인터넷을 사용할 때는 IP 주소 대신 사용하기 쉽게 ‘www..***’ 등과 같이 문자로 ㉢(이루어진) 도메인 네임을 이용한다. 따라서 도메인 네임을 IP 주소로 변환해 주는 DNS가 필요하며 DNS를 운영 하는 장치를 네임서버라고 한다. 컴퓨터에는 네임서버의 IP 주소가 기록되어 있어야 하는데, 유동 IP 주소를 할당받는 컴퓨터에는 IP 주소를 받을 때 네임서버의 IP 주소가 자동으로 기록되지만, 고정 IP 주소를 사용하는 컴퓨터에는 사용자가 네임서버의 IP 주소를 직접 기록해 놓아야 한다. 인터넷 통신사는 가입자들이 공동으로 사용할 수 있는 네임서버를 운영하고 있다. ㉮ (사용자가 어떤 사이트에 정상적으로 접속하는 과정)을 살 펴보자. 웹 사이트에 접속하려고 하는 컴퓨터를 클라이언트라 한다. 사용자가 방문하고자 하는 사이트의 도메인 네임을 주소 창에 직접 입력하거나 포털 사이트에서 그 사이트를 검색해 클릭하면 클라이언트는 기록되어 있는 네임서버에 도메인 네 임에 해당하는 IP 주소를 물어보는 질의 패킷을 보낸다. 네임 서버는 해당 IP 주소가 자신의 목록에 있으면 클라이언트에 이 IP 주소를 알려 주는 응답 패킷을 보낸다. 응답 패킷에는 어느 질의 패킷에 대한 응답인지가 적혀 있다. 만일 해당 IP 주소가 목록에 없으면 네임서버는 다른 네임서버의 IP 주소를 알려 주는 응답 패킷을 보내고, 클라이언트는 다시 그 네임서 버에 질의 패킷을 보내는 단계로 돌아가 같은 과정을 반복한다. 클라이언트는 이렇게 ㉣ (알아낸) IP 주소로 사이트를 찾아간다. 네임서버와 클라이언트는 UDP라는 프로토콜에 ㉤ (맞추어) 패 킷을 주고받는다. UDP는 패킷의 빠른 전송 속도를 확보하기 위해 상대에게 패킷을 보내기만 할 뿐 도착 여부는 확인하지 않으며, 특정 질의 패킷에 대해 처음 도착한 응답 패킷을 신뢰 하고 다음에 도착한 패킷은 확인하지 않고 버린다. DNS 스푸 핑은 UDP의 이런 허점들을 이용한다. 이 문제지에 관한 저작권은 한국교육과정평가원에 있습니다. ㉯ (DNS 스푸핑이 이루어지는 과정)을 알아보자. 악성 코드에 감염되어 DNS 스푸핑을 행하는 컴퓨터를 공격자라 한다. 클 라이언트가 네임서버에 특정 IP 주소를 묻는 질의 패킷을 보 낼 때, 공격자에도 패킷이 전달되고 공격자는 위조 사이트의 IP 주소가 적힌 응답 패킷을 클라이언트에 보낸다. 공격자가 보낸 응답 패킷이 네임서버가 보낸 응답 패킷보다 클라이언트 에 먼저 도착하고 클라이언트는 공격자가 보낸 응답 패킷을 옳은 패킷으로 인식하여 위조 사이트로 연결된다.',
			type: '뉴스',
			categoryName: '시사',
			hits: 543,
			reporter: '오영주',
		},
		{
			articleId: 1,
			title: '인체생리학',
			content:
				'혈액을 통해 운반된 노폐물이나 독소는 주로 콩팥의 사구체를 통해 일차적으로 여과된다. 사구체는 모세 혈관이 뭉쳐진 덩어리 로, 보먼주머니에 담겨 있다. 사구체는 들세동맥에서 ⓐ(유입)되 는 혈액 중 혈구나 대부분의 단백질은 여과시키지 않고 날세동 맥으로 흘려보내며, 물ㆍ요소ㆍ나트륨ㆍ포도당 등과 같이 작은 물질들은 사구체막을 통과시켜 보먼주머니를 통해 세뇨관으로 나가게 한다. 이 과정을 ‘사구체 여과’라고 한다.\n 사구체 여과가 발생하기 위해서는 사구체로 들어온 혈액을 사 구체막 바깥쪽으로 밀어 주는 힘이 필요한데, 이 힘은 주로 들세 동맥과 날세동맥의 직경 차이에서 비롯된다. 사구체로 혈액이 들 어가는 들세동맥의 직경보다 사구체로부터 혈액이 나오는 날세 동맥의 직경이 작다. 이에 따라 사구체로 유입되는 혈류량보다 나가는 혈류량이 적기 때문에 자연히 사구체의 모세 혈관에는 다른 신체 기관의 모세 혈관보다 높은 혈압이 ⓑ(발생)하고, 이 혈압으로 인해 사구체의 모세 혈관에서 사구체 여과가 이루어진 다. ㉠(사구체의 혈압은 동맥의 혈압에 따라 변화가 일어날 수 있지만 생명 유지를 위해 일정하게 유지된다.)\n 사구체막은 사구체 여과가 발생하기 위해 적절한 구조를 갖추 고 있다. 사구체막은 모세 혈관 벽과 기저막, 보먼주머니 내층으 로 이루어진다. 모세 혈관 벽은 편평한 내피세포 한 층으로 이루 어져 있다. 이 내피세포들에는 구멍이 있으며 내피세포들 사이에 도 구멍이 있다. 이 때문에 사구체의 모세 혈관은 다른 신체 기 관의 모세 혈관에 비해 동일한 혈압으로도 100배 정도 높은 투 과성을 보인다. 기저막은 내피세포와 보먼주머니 내층 사이의 비 세포성 젤라틴 층으로, 콜라겐과 당단백질로 구성된다. 콜라겐은 구조적 강도를 높이고, 당단백질은 내피세포의 구멍을 통과할 수 있는 알부민과 같이 작은 단백질들의 여과를 ⓒ (억제)한다. 이는 알부민을 비롯한 작은 단백질들이 음전하를 띠는데 당단백질 역 시 음전하를 띠기 때문에 가능한 것이다. 보먼주머니 내층은 문 어처럼 생긴 발세포로 이루어지는데, 각각의 발세포에서는 돌기 가 나와 기저막을 감싸고 있다. 돌기 사이의 좁은 틈을 따라 여 과액이 빠져나오면 보먼주머니 내강에 ⓓ(도달)하게 된다.\n 한편 사구체막을 사이에 두고 사구체 여과를 억제하는 압력이 발생한다. 혈액 속 대부분의 단백질들은 여과되지 않기 때문에 사구체의 모세 혈관 내에는 존재하고 보먼주머니 내강에는 거의 존재하지 않는다. 따라서 보먼주머니 내강보다 사구체의 모세 혈 관의 단백질 농도가 높다. 그 결과 보먼주머니 내강의 물이 사구 체의 모세 혈관 쪽으로 이동하려는 삼투압이 발생하게 된다. 이 를 ‘혈장 교질 삼투압’이라고 한다. 그리고 보먼주머니 내강에 도 달한 여과액에 의해 ‘보먼주머니 수압’이 발생한다. 이 압력은 보 먼주머니 쪽에서 사구체의 모세 혈관 쪽으로 작용하기 때문에 여과를 방해한다. 결과적으로 여과를 발생시키는 압력과 억제하 는 압력의 차이가 ‘실제 여과압’이 된다.\n 질환이 있지 않은 정상 상태에서는 혈장 교질 삼투압과 보먼 주머니 수압이 크게 변하지 않는다. 그러나 사구체의 혈압은 동 맥의 혈압에 따라 증가하거나 감소할 수 있다. 이 같은 변동은 생명 유지에 ⓔ(적합)하지 않기 때문에 자가 조절 기능에 의해 관 리된다. 즉 콩팥은 심장의 수축에 의해 발생하는 혈압에 변동이 생기더라도 제한된 범위 내에서 사구체로 유입되는 혈류량을 일 정하게 유지한다. 자가 조절은 주로 들세동맥의 직경을 조절함으로써 가능하다.',
			type: '비문학',
			hits: 523,
		},
		{
			articleId: 1,
			title: '볼펜이 사람들에게 널리 사용되는 이유',
			content:
				'안녕하세요. 여러분의 필통에는 어떤 필기구가 가장 많은가요? (청중의 답을 듣고) 네, 제 생각대로 볼펜이 많군요. 그럼 사람 들은 왜 볼펜을 애용할까요? 값이 싸고 휴대하기 편해서이기도 하지만 또 다른 장점이 있습니다. 그래서 오늘은 볼펜이 사람들 에게 널리 사용되는 이유를 말씀드리겠습니다. \n 먼저 볼펜은 글씨를 쓸 때 종이가 찢어지거나 볼펜 끝 부분이 망가지는 일이 적습니다. 이게 왜 장점일까요? (자료 1을 가리 키며) 보시는 것처럼 볼펜이 사용되기 이전부터 쓰이던 만년필은 모세관 현상에 의해 힘들이지 않고 글씨를 쓸 수 있습니다. 하지만 펜촉이 날카로워 종이가 찢어지기도 하고, 거친 표면에 글씨를 쓰면 펜촉이 망가지기도 쉽습니다. \n 아, 질문이 있으시네요. (㉠ 청중의 질문을 듣고) 겉으로는 잘 보이지 않지만 종이의 섬유소가 가는 대롱의 역할을 하기 때문에 펜촉에 있던 잉크가 모세관 현상에 의해 종이로 흘러가서 쉽게 필기할 수 있는 겁니다. 이해되셨나요? (청중이 고개를 끄덕이는 것을 보고) 네, 그럼 발표를 이어 가겠습니다. \n (자료 2를 가리키며) 보시는 것처럼 볼펜은 글씨를 쓸 때 볼과 종이의 마찰에 의해 볼이 구르지요. 이 과정에서 볼의 잉크가 종이에 묻으며 글씨가 써집니다. 그런데 볼펜의 볼이 빠진 경험이 한 번쯤 있으시죠? (자료 3을 가리키며) 보시는 것처럼 볼펜은 잉크가 들어갈 대롱의 끝에 볼을 넣은 후 밑 부분을 오므려 볼이 빠지지 않도록 하는데요, 볼이 빠지는 문제를 정밀한 기술로 보완하고 있습니다. \n 또한 볼펜은 종류가 다양하여 사람들이 필요에 따라 고를 수 있어서 좋습니다. 글자가 물에 잘 번지지 않는 유성 볼펜, 필기감이 부드러운 수성 볼펜, 여러 색을 하나에 담은 다색 볼펜, 글씨를 쓰고 지울 수 있는 볼펜, 우주에서 사용할 수 있는 가압 볼펜 등 선택의 폭이 넓습니다. \n 볼펜은 신문 기자였던 라즐로 비로가 특허를 낸 이후 상용화 되면서 기존 필기구의 단점을 보완하고 사람들의 다양한 요구를 반영하여 꾸준히 사용되고 있습니다. 지금까지, 볼펜이 사람들에게 널리 사용되는 이유를 말씀드렸습니다. 감사합니다.',
			type: '비문학',
			hits: 623,
		},
		{
			articleId: 1,
			title: '문법',
			content:
				'두 명제가 모두 참인 것도 모두 거짓인 것도 가능하지 않은 관계를 모순 관계라고 한다. 예를 들어, 임의의 명제를 P라고 하면 P와 ～P는 모순 관계이다.(기호 ‘～’은 부정을 나타낸다.) P와 ～P가 모두 참인 것은 가능하지 않다는 법칙을 무모순율 이라고 한다. 그런데 “㉠(다보탑은 경주에 있다.)”와 “㉡(다보탑은 개성에 있을 수도 있었다.)”는 모순 관계가 아니다. 현실과 다르게 다보탑을 경주가 아닌 곳에 세웠다면 다보탑의 소재지는 지 금과 달라졌을 것이다. 철학자들은 이를 두고, P와 ～P가 모두 참인 혹은 모두 거짓인 가능세계는 없지만 다보탑이 개성에 있는 가능세계는 있다고 표현한다. \n ‘가능세계’의 개념은 일상 언어에서 흔히 쓰이는 필연성과 가능 성에 관한 진술을 분석하는 데 중요한 역할을 한다. ‘P는 가능 하다’는 P가 적어도 하나의 가능세계에서 성립한다는 뜻이며, ‘P는 필연적이다’는 P가 모든 가능세계에서 성립한다는 뜻이다. “만약 Q이면 Q이다.”를 비롯한 필연적인 명제들은 모든 가능 세계에서 성립한다. “다보탑은 경주에 있다.”와 같이 가능하지만 필연적이지는 않은 명제는 우리의 현실세계를 비롯한 어떤 가능 세계에서는 성립하고 또 어떤 가능세계에서는 성립하지 않는다.\n 가능세계를 통한 담론은 우리의 일상적인 몇몇 표현들을 보다 잘 이해하는 데 도움이 된다. 다음 상황을 생각해 보자. 나는 현실에서 아침 8시에 출발하는 기차를 놓쳤고, 지각을 했으며, 내가 놓친 기차는 제시간에 목적지에 도착했다. 그리고 나는 “만약 내가 8시 기차를 탔다면, 나는 지각을 하지 않았다.”라고 주장한다. 그런데 전통 논리학에서는 “만약 A이면 B이다.”라는 형식의 명제는 A가 거짓인 경우에는 B의 참 거짓에 상관없이 참이라고 규정한다. 그럼에도 ⓐ (내가 만약 그 기차를 탔다면 여전히 지각을 했을 것이라고 주장하지는 않는 이유는 무엇일 까?) 내가 그 기차를 탄 가능세계들을 생각해 보면 그 이유를 알 수 있다. 그 가능세계 중 어떤 세계에서 나는 여전히 지각 을 한다. 가령 내가 탄 그 기차가 고장으로 선로에 멈춰 운행이 오랫동안 지연된 세계가 그런 예이다. 하지만 내가 기차를 탄 세계들 중에서, 내가 기차를 타고 별다른 이변 없이 제시간에 도착한 세계가 그렇지 않은 세계보다 우리의 현실세계와의 유 사성이 더 높다. 일반적으로, A가 참인 가능세계들 중에 비교 할 때, B도 참인 가능세계가 B가 거짓인 가능세계보다 현실세 계와 더 유사하다면, 현실세계의 나는 A가 실현되지 않은 경우 에, 만약 A라면 ～B가 아닌 B이라고 말할 수 있다.\n 가능세계는 다음의 네 가지 성질을 갖는다. 첫째는 가능세계의 일관성이다. 가능세계는 명칭 그대로 가능한 세계이므로 어떤 것이 가능하지 않다면 그것이 성립하는 가능세계는 없다. 둘째는 가능세계의 포괄성이다. 이것은 어떤 것이 가능하다면 그것이 성립하는 가능세계는 존재한다는 것이다. 셋째는 가능세계의 완결성이다. 어느 세계에서든 임의의 명제 P에 대해 “P이거나 ～P이다.”라는 배중률이 성립한다. 즉 P와 ～P 중 하나는 반드 시 참이라는 것이다. 넷째는 가능세계의 독립성이다. 한 가능세 계는 모든 시간과 공간을 포함해야만 하며, 연속된 시간과 공간 에 포함된 존재들은 모두 동일한 하나의 세계에만 속한다. 이 문제지에 관한 저작권은 한국교육과정평가원에 있습니다. 한 가능세계 W1의 시간과 공간이, 다른 가능세계 W2의 시간과 공간으로 이어질 수는 없다. W1과 W2는 서로 시간과 공간이 전혀 다른 세계이다.\n 가능세계의 개념은 철학에서 갖가지 흥미로운 질문과 통찰을 이끌어 내며, 그에 관한 연구 역시 활발히 진행되고 있다. 나아가 가능세계를 활용한 논의는 오늘날 인지 과학, 언어학, 공학 등의 분야로 그 응용의 폭을 넓히고 있다다.',

			type: '비문학',
			categoryName: '시사',
			hits: 526,
			reporter: '오영주',
		},
		{
			articleId: 1,
			title: '문법',
			content:
				'두 명제가 모두 참인 것도 모두 거짓인 것도 가능하지 않은 관계를 모순 관계라고 한다. 예를 들어, 임의의 명제를 P라고 하면 P와 ～P는 모순 관계이다.(기호 ‘～’은 부정을 나타낸다.) P와 ～P가 모두 참인 것은 가능하지 않다는 법칙을 무모순율 이라고 한다. 그런데 “㉠(다보탑은 경주에 있다.)”와 “㉡(다보탑은 개성에 있을 수도 있었다.)”는 모순 관계가 아니다. 현실과 다르게 다보탑을 경주가 아닌 곳에 세웠다면 다보탑의 소재지는 지 금과 달라졌을 것이다. 철학자들은 이를 두고, P와 ～P가 모두 참인 혹은 모두 거짓인 가능세계는 없지만 다보탑이 개성에 있는 가능세계는 있다고 표현한다. \n ‘가능세계’의 개념은 일상 언어에서 흔히 쓰이는 필연성과 가능 성에 관한 진술을 분석하는 데 중요한 역할을 한다. ‘P는 가능 하다’는 P가 적어도 하나의 가능세계에서 성립한다는 뜻이며, ‘P는 필연적이다’는 P가 모든 가능세계에서 성립한다는 뜻이다. “만약 Q이면 Q이다.”를 비롯한 필연적인 명제들은 모든 가능 세계에서 성립한다. “다보탑은 경주에 있다.”와 같이 가능하지만 필연적이지는 않은 명제는 우리의 현실세계를 비롯한 어떤 가능 세계에서는 성립하고 또 어떤 가능세계에서는 성립하지 않는다.\n 가능세계를 통한 담론은 우리의 일상적인 몇몇 표현들을 보다 잘 이해하는 데 도움이 된다. 다음 상황을 생각해 보자. 나는 현실에서 아침 8시에 출발하는 기차를 놓쳤고, 지각을 했으며, 내가 놓친 기차는 제시간에 목적지에 도착했다. 그리고 나는 “만약 내가 8시 기차를 탔다면, 나는 지각을 하지 않았다.”라고 주장한다. 그런데 전통 논리학에서는 “만약 A이면 B이다.”라는 형식의 명제는 A가 거짓인 경우에는 B의 참 거짓에 상관없이 참이라고 규정한다. 그럼에도 ⓐ (내가 만약 그 기차를 탔다면 여전히 지각을 했을 것이라고 주장하지는 않는 이유는 무엇일 까?) 내가 그 기차를 탄 가능세계들을 생각해 보면 그 이유를 알 수 있다. 그 가능세계 중 어떤 세계에서 나는 여전히 지각 을 한다. 가령 내가 탄 그 기차가 고장으로 선로에 멈춰 운행이 오랫동안 지연된 세계가 그런 예이다. 하지만 내가 기차를 탄 세계들 중에서, 내가 기차를 타고 별다른 이변 없이 제시간에 도착한 세계가 그렇지 않은 세계보다 우리의 현실세계와의 유 사성이 더 높다. 일반적으로, A가 참인 가능세계들 중에 비교 할 때, B도 참인 가능세계가 B가 거짓인 가능세계보다 현실세 계와 더 유사하다면, 현실세계의 나는 A가 실현되지 않은 경우 에, 만약 A라면 ～B가 아닌 B이라고 말할 수 있다.\n 가능세계는 다음의 네 가지 성질을 갖는다. 첫째는 가능세계의 일관성이다. 가능세계는 명칭 그대로 가능한 세계이므로 어떤 것이 가능하지 않다면 그것이 성립하는 가능세계는 없다. 둘째는 가능세계의 포괄성이다. 이것은 어떤 것이 가능하다면 그것이 성립하는 가능세계는 존재한다는 것이다. 셋째는 가능세계의 완결성이다. 어느 세계에서든 임의의 명제 P에 대해 “P이거나 ～P이다.”라는 배중률이 성립한다. 즉 P와 ～P 중 하나는 반드 시 참이라는 것이다. 넷째는 가능세계의 독립성이다. 한 가능세 계는 모든 시간과 공간을 포함해야만 하며, 연속된 시간과 공간 에 포함된 존재들은 모두 동일한 하나의 세계에만 속한다. 이 문제지에 관한 저작권은 한국교육과정평가원에 있습니다. 한 가능세계 W1의 시간과 공간이, 다른 가능세계 W2의 시간과 공간으로 이어질 수는 없다. W1과 W2는 서로 시간과 공간이 전혀 다른 세계이다.\n 가능세계의 개념은 철학에서 갖가지 흥미로운 질문과 통찰을 이끌어 내며, 그에 관한 연구 역시 활발히 진행되고 있다. 나아가 가능세계를 활용한 논의는 오늘날 인지 과학, 언어학, 공학 등의 분야로 그 응용의 폭을 넓히고 있다다.',

			type: '비문학',
			categoryName: '시사',
			hits: 526,
			reporter: '오영주',
		},
		{
			articleId: 1,
			title: '인공지능의 면접에 대한 활용',
			content:
				'사회자 : 이번 시간에는 ‘인공 지능을 면접에 활용하는 것이 바람직 하다.’라는 논제로 토론을 진행하겠습니다. 찬성 측이 먼저 입론해 주신 후 반대 측에서 반대 신문해 주십시오. \n 찬성 1 : 저희는 인공 지능을 면접에 활용하는 것이 바람직하다고 생각합니다. 인공 지능을 활용한 면접은 인터넷에 접속하여 인공 지능과 문답하는 방식 으로 진행됩니다. 지원자는 시 간과 공간에 구애받지 않고 면접에 참여할 수 있는 편리성이 있어 면접 기회가 확대됩니다. 또한 회사는 면접에 소요 되는 인력을 줄여, 비용 절감 측면에서 경제성이 큽니다. 실제로 인공 지능을 면접에 활용한 ○○회사는 전년 대비 2억 원 정도의 비용을 절감했습니다. 그리고 기존 방식의 면접에서는 면접관의 주관이 개입될 가능성이 큰 데 반해, 인공 지능을 활용한 면접에서는 빅데이터를 바탕으로 한 일관된 평가 기준을 적용할 수 있습니다. 이러한 평가의 객관성 때문에 많은 회사들이 인공 지능 면접을 도입하는 추세입니다. \n [A][반대 2 : 기존 면접에서는 면접관의 주관이 개입될 여지가 있다고 하셨는데요, 회사의 특수성을 고려해 적합한 인 재를 선발하려면 오히려 해당 분야의 경험이 축적된 면접관의 생각이나 견해 가 면접 상황에서 중요한 판단 기준이 돼야 하지 않을까요? \n 찬성1: 면접관의 생각이나 견해로는 지원자의 잠재력 을 판단 하기 어렵습니다. 오히려 오랜 기간 회사의 인사 정보가 축적된 데이터가 잠재력을 판단하는 데 적합하기 때문에 인공 지능 면접이 신뢰성도 높습니다. 회사 관리자들을 대상으로 한 설문 조사에서도 잠재력 파악에 인공 지능을 활용한 면접을 신뢰한다는 비율이 높게 나왔습니다. \n 사회자 : 이번에는 반대 측에서 입론해 주신 후 찬성 측에서 반대 신문해 주십시오. \n 반대 1 : 저희는 인공 지능을 면접에 활용하는 것이 바람직하다고 보지 않습니다. 먼저 인공 지능을 활용한 면접은 기술적 결함 이 발생할 수 있습니다. 이로 인해 면접이 원활하지 않거나 중단되어 지원자들에게 불편을 줄 수 있고, 지원자들의 면접 기회가 상실될 수 있습니다. 또한 인공 지능을 활용한 면접은 당장의 비용 절감 효과에 주목해서는 안 되고 장기적인 관점 에서 보아야 합니다. 현재의 경제성만 고려하면 미래에 더 큰 경제적 가치를 창출할 인재를 놓치게 돼 결국 경제적이지 않습 니다. 마지막으로 인공 지능의 빅데이터는 왜곡될 가능성이 있습니다. 빅데이터는 사회에서 형성된 정보가 축적된 결과물 로서 특정 대상과 사안에 치우친 것일 수 있습니다. 이러한 이유로 △△회사는 인공 지능을 활용한 면접을 폐지했습니다. \n [B][찬성 1 : △△회사는 인공 지능을 활용한 면접을 폐지했지만, 통계 자료에서 보다시피 인공 지능을 면접에 활용하는 것은 확대되고 있는 추세이지 않습니까? \n 반대 1 : 경제적인 이유로 인공 지능 면접이 활용되고 있지만, 인공 지능을 활용한 면접의 한계가 드러난다면 이를 폐지하는 기업들이 늘어나게 될 것입니다.] \n [토론 후 과제 : 논제에 대한 자신의 입장을 밝히고, 이를 확장 하여 ‘인간과 인공 지능의 관계’에 대해 주장하는 글 쓰기] \n (나) 학생의 초고 인공 지능을 면접에 활용하는 것은 바람직하지 않다. 인공 지능 앞에서 면접을 보느라 진땀을 흘리는 인간의 모습을 생각 하면 너무 안타깝다. 미래에 인공 지능이 인간의 고유한 영역 까지 대신할 것이라고 사람들은 말하는데, 인공 지능이 인간을 대신할 수 있을까? 인간과 인공 지능의 관계는 어떠해야 할까? 인공 지능은 인간의 삶을 편리하게 돕는 도구일 뿐이다. 인간이 만든 도구인 인공 지능이 인간을 평가할 수 있는지에 대해 생각해 볼 필요가 있다. 도구일 뿐인 기계가 인간을 평가하는 것은 정당 하지 않다. 인간이 개발한 인공 지능이 인간을 판단한다면 주체와 객체가 뒤바뀌는 상황이 발생할 것이다. 인공 지능이 발전하더라도 인간과 같은 사고는 불가능하다. 인공 지능은 겉으로 드러난 인간의 말과 행동을 분석하지만 인간은 말과 행동 이면의 의미까지 고려하여 사고한다. 인공 지능은 빅데이터를 바탕으로 결과를 도출해 내는 기계에 불과하므로, 통계적 분석을 할 뿐 타당한 판단을 할 수 없다. 기계가 타당한 판단을 할 것이라는 막연한 기대를 한다면 머지않아 인간이 기계에 예속되는 상황이 벌어질지도 모른다. 인공 지능은 사회적 관계를 맺을 수 없다. 반면 인간은 사회 에서 의사소통을 통해 관계를 형성한다. 이 과정에서 축적된 인간의 경험이 바탕이 되어야 타인의 잠재력을 발견할 수 있다.',
			type: '비문학',
			categoryName: '시사',
			hits: 526,
			reporter: '오영주',
		},
		{
			articleId: 1,
			title: '전통적 인식론과 베이즈주의의 관점에서 믿음의 태도와 변화',
			content:
				'㉠ 많은 전통적 인식론자는 임의의 명제에 대해 우리가 세 가지 믿음의 태도 중 하나만을 ⓐ 가질 수 있다고 본다. 가령 ‘내일 눈이 온다.’는 명제를 참이라고 믿거나, 거짓이라고 믿거 나, 참이라 믿지도 않고 거짓이라 믿지도 않을 수 있다. 반면 ㉡ 베이즈주의자는 믿음은 정도의 문제라고 본다. 가령 각 인식 주체는 ‘내일 눈이 온다.’가 참이라는 것에 대하여 가장 강한 믿음의 정도에서 가장 약한 믿음의 정도까지 가질 수 있다. 이처럼 베이즈주의자는 믿음의 정도를 믿음의 태도에 포함함으로써 많은 전통적 인식론자들과 달리 믿음의 태도를 풍부하게 표현한다. \n 우리는 종종 임의의 명제가 참인지 거짓인지 새롭게 알게 된다. 이것을 베이즈주의자의 표현으로 바꾸면 그 명제가 참인지 거짓 인지에 대해 가장 강한 믿음의 정도를 새롭게 갖는다는 것이다. 베이즈주의는 이런 경우에 믿음의 정도가 어떤 방식으로 변해야 하는지에 대해 정교한 설명을 제공한다. 이에 따르면, 인식 주체가 특정 시점에 임의의 명제 A가 참이라는 것만을 또는 거짓이라는 것만을 새롭게 알게 됐을 때, 다른 임의의 명제 B에 대한 인식 주체의 기존 믿음의 정도의 변화는 조건화 원리 의 적용을 받는다. 이는 믿음의 정도의 변화에 관한 원리로서, 만약 인식 주체가 A가 참이라는 것만을 새롭게 알게 된다면, B가 참이라는 것에 대한 그 인식 주체의 믿음의 정도는 애초의 믿음의 정도에서 A가 참이라는 조건하에 B가 참이라는 것에 대한 믿음의 정도로 되어야 함을 의미한다. 예를 들어 갑이 ‘내일 비가 온다.’가 참 이라는 것을 약하게 믿고 있고, ‘오늘 비가 온다.’가 참이라는 조건하에서는 ‘내일 비가 온다.’가 참이라는 것을 강하게 믿는다고 해 보자. 조건화 원리에 따르면, 갑이 실제로 ‘오늘 비가 온다.’가 참이라는 것만을 새롭게 알게 될 때, ‘내일 비가 온다.’가 참이 라는 것을 그 이전보다 더 강하게 믿는 것이 합리적이다. 조건화 원리는 새롭게 알게 된 명제가 동시에 둘 이상인 경우에도 마찬 가지로 적용된다. 다만 이 원리는 믿음의 정도에 관한 것이지 행위에 관한 것은 아니다. \n 명제들 중에는 위의 예에서처럼 참인지 거짓인지 새롭게 알게 된 명제와 관련된 것도 있지만 그렇지 않은 것도 있다. 조건화 원리에 ⓑ따르면, 어떤 명제가 참인지 거짓인지 새롭게 알게 되더 라도 그 명제와 관련 없는 명제에 대한 믿음의 정도는 변하지 않아야 한다. 예를 들어 위에서처럼 갑이 ‘오늘 비가 온다.’가 참이라는 것만을 새롭게 알게 되더라도 그것과 관련 없는 명제 ‘다른 은하에는 외계인이 존재한다.’에 대한 그의 믿음의 정도는 변하지 않아야 한다. 이처럼 베이즈주의자는 특별한 이유가 없는 한 우리의 믿음의 정도는 유지되어야 한다고 ⓒ 본다. \n 베이즈주의자는 이렇게 상식적으로 당연하게 여겨지는 생각을 정당화하기 위해 기존의 믿음의 정도를 유지함으로써 ⓓ얻을 수 있는 실용적 효율성에 호소할 수 있다. 특별한 이유 없이 학교를 옮기는 행위는 어떠한 방식으로든 우리의 에너지를 불필요하게 소모한다. 베이즈주의자는 특별한 이유 없이 기존의 믿음의 정도를 ⓔ바꾸는 것도 이와 유사하게 에너지를 불필요하게 소모한다고 볼 수 있다. 이 관점에서는 실용적 효율성을 추구한다면, 특별한 이유가 없는 한 기존의 믿음의 정도를 유지하는 것이 합리적이다.',
			type: '비문학',
			categoryName: '시사',
			hits: 526,
			reporter: '오영주',
		},
	];

	// 날짜순으로 정렬
	// const sortedArticleList = articles!.sort((a, b) => b.completedAt!.getTime() - a.completedAt!.getTime());

	// 상위 3개만 추출
	const top3Articles = articles.slice(0, 3);

	return (
		<>
			<div className='flex flex-col w-full'>
				<div className='flex flex-row justify-between items-center pr-10'>
					<div className='p-10 text-2xl font-bold flex'>내가 읽은 글</div>

					<Button
						className='border bg-blue-700 text-white border-blue-300 hover:bg-blue-800'
						onClick={() => handleArticles(articles!)}
					>
						<span className='material-symbols-outlined text-[1.2rem]'>add</span>
						<span>더보기</span>
					</Button>
				</div>
				<div className='px-10 h-full flex flex-col justify-between gap-y-5'>
					{top3Articles?.map((article, index) => (
						<div
							key={index}
							className='border border-gray-300 w-full flex flex-row items-center justify-between p-5 rounded-xl'
						>
							<div className='flex flex-col gap-5'>
								<div className='font-bold text-xl text-start'>{article.title}</div>
								<div className='flex flex-row justify-start gap-5'>
									{/* <div className='text-gray-500'>{article.completedAt}</div> */}
									<div className='text-gray-500'>여기에 날짜 </div>
									<div className='w-16 border border-tag-100 bg-tag-50 rounded-xl text-tag-100 text-sm '>
										#{article.type}
									</div>
									{article.categoryName ? (
										<div className='w-16 border border-tag-100 bg-tag-50 rounded-xl text-tag-100 text-sm'>
											#{article.categoryName}
										</div>
									) : null}
								</div>
							</div>
							<Button className='bg-primary-500 border w-1/6 border-black'>글 보러 가기</Button>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default Read;
