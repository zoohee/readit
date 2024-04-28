import { useLocation } from 'react-router-dom';
import Headers from '../../components/Headers';
import GroupHeader from './GroupHeader';
import ProfileImage from '../../assets/images/profile.png';
import { Button, Card } from 'flowbite-react';
import useModal from '../../hooks/useModal';
import MemberDetail from './MemberDetail';

import { communityProps } from '../../types/gropProps';
import Articles from './Articles';
import { useMutation } from 'react-query';
import Chat from './Chat';

const Group = () => {
	// const baseUrl = import.meta.env.VITE_APP_PUBLIC_BASE_URL;
	const location = useLocation();
	const communityId = location.state?.communityId;
	console.log(communityId)
	// const [myGroup, setMyGroup] = useState<communityProps>();
	// // 모임 세부 정보 받아오기
	// const groupData = async () => {
	// 	const data = await fetch(`${baseUrl}/community/${communityId}`).then((response) => response.json());
	// 	return data;
	// };

	// useEffect(() => {
	// 	groupData()
	// 		.then((res) => setMyGroup(res))
	// 		.catch((err) => {
	// 			console.log(' 모임 세부 정보 받아오기 에러');
	// 		});
	// }, []);

	const [isOpen, open, close] = useModal();

	const myGroup: communityProps = {
		hits: 523,
		writerName: '오영주',
		maxParticipants: 4,
		currentParticipants: 2,
		articleCount: 3,
		notice: '3개 씩 읽으세요',
		categoryName: '시사',
		title: 'Seeking Partners',
		endAt: new Date(),
		memberList: [
			{
				memberId: 1,
				memberName: '오영주',
				profile: '123123',
				readCount: 1,
			},
			{
				memberId: 2,
				memberName: '박현춘',
				profile: '123123',
				readCount: 3,
			},
		],
		articleList: [
			{
				memberName: '오영주',
				profile: '123123',
				articleId: 1,
				title: 'DNS 스푸핑이 이루어지는 과정',
				content:
					'DNS(도메인 네임 시스템) 스푸핑은 인터넷 사용자가 어떤 사이트에 접속하려 할 때 사용자를 위조 사이트로 접속시키는 행위를 말한다. 이는 도메인 네임을 IP 주소로 변환해 주는 과 정에서 이루어진다. 인터넷에 연결된 컴퓨터들이 서로를 식별하고 통신하기 위 해서 각 컴퓨터들은 IP(인터넷 프로토콜)에 따라 ㉠ (만들어지는) 고유 IP 주소를 가져야 한다. 프로토콜은 컴퓨터들이 연결되어 서로 데이터를 주고받기 위해 사용하는 통신 규약으로 소프트 웨어나 하드웨어로 구현된다. 현재 주로 사용하는 IP 주소는 ‘.126.63.1’처럼 점으로 구분된 4개의 필드에 숫자를 사용 하여 ㉡ (나타낸다.) 이 주소를 중복 지정하거나 임의로 지정해 서는 안 되고 공인 IP 주소를 부여받아야 한다. 공인 IP 주소에는 동일한 번호를 지속적으로 사용하는 고정 IP 주소와 번호가 변경되기도 하는 유동 IP 주소가 있다. 유동 IP 주소는 DHCP라는 프로토콜에 의해 부여된다. DHCP는 IP 주소가 필요한 컴퓨터의 요청을 받아 주소를 할당해 주고, 컴 퓨터가 IP 주소를 사용하지 않으면 주소를 반환받아 다른 컴 퓨터가 그 주소를 사용할 수 있도록 해 준다. 한편, 인터넷에 직접 접속은 안 되고 내부 네트워크에서만 서로를 식별할 수 있는 사설 IP 주소도 있다. 인터넷은 공인 IP 주소를 기반으로 동작하지만 우리가 인터넷을 사용할 때는 IP 주소 대신 사용하기 쉽게 ‘www..***’ 등과 같이 문자로 ㉢(이루어진) 도메인 네임을 이용한다. 따라서 도메인 네임을 IP 주소로 변환해 주는 DNS가 필요하며 DNS를 운영 하는 장치를 네임서버라고 한다. 컴퓨터에는 네임서버의 IP 주소가 기록되어 있어야 하는데, 유동 IP 주소를 할당받는 컴퓨터에는 IP 주소를 받을 때 네임서버의 IP 주소가 자동으로 기록되지만, 고정 IP 주소를 사용하는 컴퓨터에는 사용자가 네임서버의 IP 주소를 직접 기록해 놓아야 한다. 인터넷 통신사는 가입자들이 공동으로 사용할 수 있는 네임서버를 운영하고 있다. ㉮ (사용자가 어떤 사이트에 정상적으로 접속하는 과정)을 살 펴보자. 웹 사이트에 접속하려고 하는 컴퓨터를 클라이언트라 한다. 사용자가 방문하고자 하는 사이트의 도메인 네임을 주소 창에 직접 입력하거나 포털 사이트에서 그 사이트를 검색해 클릭하면 클라이언트는 기록되어 있는 네임서버에 도메인 네 임에 해당하는 IP 주소를 물어보는 질의 패킷을 보낸다. 네임 서버는 해당 IP 주소가 자신의 목록에 있으면 클라이언트에 이 IP 주소를 알려 주는 응답 패킷을 보낸다. 응답 패킷에는 어느 질의 패킷에 대한 응답인지가 적혀 있다. 만일 해당 IP 주소가 목록에 없으면 네임서버는 다른 네임서버의 IP 주소를 알려 주는 응답 패킷을 보내고, 클라이언트는 다시 그 네임서 버에 질의 패킷을 보내는 단계로 돌아가 같은 과정을 반복한다. 클라이언트는 이렇게 ㉣ (알아낸) IP 주소로 사이트를 찾아간다. 네임서버와 클라이언트는 UDP라는 프로토콜에 ㉤ (맞추어) 패 킷을 주고받는다. UDP는 패킷의 빠른 전송 속도를 확보하기 위해 상대에게 패킷을 보내기만 할 뿐 도착 여부는 확인하지 않으며, 특정 질의 패킷에 대해 처음 도착한 응답 패킷을 신뢰 하고 다음에 도착한 패킷은 확인하지 않고 버린다. DNS 스푸 핑은 UDP의 이런 허점들을 이용한다. 이 문제지에 관한 저작권은 한국교육과정평가원에 있습니다. ㉯ (DNS 스푸핑이 이루어지는 과정)을 알아보자. 악성 코드에 감염되어 DNS 스푸핑을 행하는 컴퓨터를 공격자라 한다. 클 라이언트가 네임서버에 특정 IP 주소를 묻는 질의 패킷을 보 낼 때, 공격자에도 패킷이 전달되고 공격자는 위조 사이트의 IP 주소가 적힌 응답 패킷을 클라이언트에 보낸다. 공격자가 보낸 응답 패킷이 네임서버가 보낸 응답 패킷보다 클라이언트 에 먼저 도착하고 클라이언트는 공격자가 보낸 응답 패킷을 옳은 패킷으로 인식하여 위조 사이트로 연결된다.',

				categoryName: '시사',
				type: '뉴스',
				completedAt: new Date(),
				summary: '재미있었다',
				score: 45,
				feedback: '잘 요약했어요',
			},
			{
				memberName: '박현춘',
				profile: '123123',
				articleId: 1,
				title: 'DNS 스누피가 귀여운 이유',
				content:
					'DNS(도메인 네임 시스템) 스푸핑은 인터넷 사용자가 어떤 사이트에 접속하려 할 때 사용자를 위조 사이트로 접속시키는 행위를 말한다. 이는 도메인 네임을 IP 주소로 변환해 주는 과 정에서 이루어진다. 인터넷에 연결된 컴퓨터들이 서로를 식별하고 통신하기 위 해서 각 컴퓨터들은 IP(인터넷 프로토콜)에 따라 ㉠ (만들어지는) 고유 IP 주소를 가져야 한다. 프로토콜은 컴퓨터들이 연결되어 서로 데이터를 주고받기 위해 사용하는 통신 규약으로 소프트 웨어나 하드웨어로 구현된다. 현재 주로 사용하는 IP 주소는 ‘.126.63.1’처럼 점으로 구분된 4개의 필드에 숫자를 사용 하여 ㉡ (나타낸다.) 이 주소를 중복 지정하거나 임의로 지정해 서는 안 되고 공인 IP 주소를 부여받아야 한다. 공인 IP 주소에는 동일한 번호를 지속적으로 사용하는 고정 IP 주소와 번호가 변경되기도 하는 유동 IP 주소가 있다. 유동 IP 주소는 DHCP라는 프로토콜에 의해 부여된다. DHCP는 IP 주소가 필요한 컴퓨터의 요청을 받아 주소를 할당해 주고, 컴 퓨터가 IP 주소를 사용하지 않으면 주소를 반환받아 다른 컴 퓨터가 그 주소를 사용할 수 있도록 해 준다. 한편, 인터넷에 직접 접속은 안 되고 내부 네트워크에서만 서로를 식별할 수 있는 사설 IP 주소도 있다. 인터넷은 공인 IP 주소를 기반으로 동작하지만 우리가 인터넷을 사용할 때는 IP 주소 대신 사용하기 쉽게 ‘www..***’ 등과 같이 문자로 ㉢(이루어진) 도메인 네임을 이용한다. 따라서 도메인 네임을 IP 주소로 변환해 주는 DNS가 필요하며 DNS를 운영 하는 장치를 네임서버라고 한다. 컴퓨터에는 네임서버의 IP 주소가 기록되어 있어야 하는데, 유동 IP 주소를 할당받는 컴퓨터에는 IP 주소를 받을 때 네임서버의 IP 주소가 자동으로 기록되지만, 고정 IP 주소를 사용하는 컴퓨터에는 사용자가 네임서버의 IP 주소를 직접 기록해 놓아야 한다. 인터넷 통신사는 가입자들이 공동으로 사용할 수 있는 네임서버를 운영하고 있다. ㉮ (사용자가 어떤 사이트에 정상적으로 접속하는 과정)을 살 펴보자. 웹 사이트에 접속하려고 하는 컴퓨터를 클라이언트라 한다. 사용자가 방문하고자 하는 사이트의 도메인 네임을 주소 창에 직접 입력하거나 포털 사이트에서 그 사이트를 검색해 클릭하면 클라이언트는 기록되어 있는 네임서버에 도메인 네 임에 해당하는 IP 주소를 물어보는 질의 패킷을 보낸다. 네임 서버는 해당 IP 주소가 자신의 목록에 있으면 클라이언트에 이 IP 주소를 알려 주는 응답 패킷을 보낸다. 응답 패킷에는 어느 질의 패킷에 대한 응답인지가 적혀 있다. 만일 해당 IP 주소가 목록에 없으면 네임서버는 다른 네임서버의 IP 주소를 알려 주는 응답 패킷을 보내고, 클라이언트는 다시 그 네임서 버에 질의 패킷을 보내는 단계로 돌아가 같은 과정을 반복한다. 클라이언트는 이렇게 ㉣ (알아낸) IP 주소로 사이트를 찾아간다. 네임서버와 클라이언트는 UDP라는 프로토콜에 ㉤ (맞추어) 패 킷을 주고받는다. UDP는 패킷의 빠른 전송 속도를 확보하기 위해 상대에게 패킷을 보내기만 할 뿐 도착 여부는 확인하지 않으며, 특정 질의 패킷에 대해 처음 도착한 응답 패킷을 신뢰 하고 다음에 도착한 패킷은 확인하지 않고 버린다. DNS 스푸 핑은 UDP의 이런 허점들을 이용한다. 이 문제지에 관한 저작권은 한국교육과정평가원에 있습니다. ㉯ (DNS 스푸핑이 이루어지는 과정)을 알아보자. 악성 코드에 감염되어 DNS 스푸핑을 행하는 컴퓨터를 공격자라 한다. 클 라이언트가 네임서버에 특정 IP 주소를 묻는 질의 패킷을 보 낼 때, 공격자에도 패킷이 전달되고 공격자는 위조 사이트의 IP 주소가 적힌 응답 패킷을 클라이언트에 보낸다. 공격자가 보낸 응답 패킷이 네임서버가 보낸 응답 패킷보다 클라이언트 에 먼저 도착하고 클라이언트는 공격자가 보낸 응답 패킷을 옳은 패킷으로 인식하여 위조 사이트로 연결된다.',

				categoryName: '시사',
				type: '뉴스',
				completedAt: new Date(),
				summary: '재미있었다',
				score: 55,
				feedback: '잘 요약했어요',
			},
			{
				memberName: '박현춘',
				profile: '123123',
				articleId: 1,
				title: 'DNS 스누피가 귀여운 이유',
				content:
					'DNS(도메인 네임 시스템) 스푸핑은 인터넷 사용자가 어떤 사이트에 접속하려 할 때 사용자를 위조 사이트로 접속시키는 행위를 말한다. 이는 도메인 네임을 IP 주소로 변환해 주는 과 정에서 이루어진다. 인터넷에 연결된 컴퓨터들이 서로를 식별하고 통신하기 위 해서 각 컴퓨터들은 IP(인터넷 프로토콜)에 따라 ㉠ (만들어지는) 고유 IP 주소를 가져야 한다. 프로토콜은 컴퓨터들이 연결되어 서로 데이터를 주고받기 위해 사용하는 통신 규약으로 소프트 웨어나 하드웨어로 구현된다. 현재 주로 사용하는 IP 주소는 ‘.126.63.1’처럼 점으로 구분된 4개의 필드에 숫자를 사용 하여 ㉡ (나타낸다.) 이 주소를 중복 지정하거나 임의로 지정해 서는 안 되고 공인 IP 주소를 부여받아야 한다. 공인 IP 주소에는 동일한 번호를 지속적으로 사용하는 고정 IP 주소와 번호가 변경되기도 하는 유동 IP 주소가 있다. 유동 IP 주소는 DHCP라는 프로토콜에 의해 부여된다. DHCP는 IP 주소가 필요한 컴퓨터의 요청을 받아 주소를 할당해 주고, 컴 퓨터가 IP 주소를 사용하지 않으면 주소를 반환받아 다른 컴 퓨터가 그 주소를 사용할 수 있도록 해 준다. 한편, 인터넷에 직접 접속은 안 되고 내부 네트워크에서만 서로를 식별할 수 있는 사설 IP 주소도 있다. 인터넷은 공인 IP 주소를 기반으로 동작하지만 우리가 인터넷을 사용할 때는 IP 주소 대신 사용하기 쉽게 ‘www..***’ 등과 같이 문자로 ㉢(이루어진) 도메인 네임을 이용한다. 따라서 도메인 네임을 IP 주소로 변환해 주는 DNS가 필요하며 DNS를 운영 하는 장치를 네임서버라고 한다. 컴퓨터에는 네임서버의 IP 주소가 기록되어 있어야 하는데, 유동 IP 주소를 할당받는 컴퓨터에는 IP 주소를 받을 때 네임서버의 IP 주소가 자동으로 기록되지만, 고정 IP 주소를 사용하는 컴퓨터에는 사용자가 네임서버의 IP 주소를 직접 기록해 놓아야 한다. 인터넷 통신사는 가입자들이 공동으로 사용할 수 있는 네임서버를 운영하고 있다. ㉮ (사용자가 어떤 사이트에 정상적으로 접속하는 과정)을 살 펴보자. 웹 사이트에 접속하려고 하는 컴퓨터를 클라이언트라 한다. 사용자가 방문하고자 하는 사이트의 도메인 네임을 주소 창에 직접 입력하거나 포털 사이트에서 그 사이트를 검색해 클릭하면 클라이언트는 기록되어 있는 네임서버에 도메인 네 임에 해당하는 IP 주소를 물어보는 질의 패킷을 보낸다. 네임 서버는 해당 IP 주소가 자신의 목록에 있으면 클라이언트에 이 IP 주소를 알려 주는 응답 패킷을 보낸다. 응답 패킷에는 어느 질의 패킷에 대한 응답인지가 적혀 있다. 만일 해당 IP 주소가 목록에 없으면 네임서버는 다른 네임서버의 IP 주소를 알려 주는 응답 패킷을 보내고, 클라이언트는 다시 그 네임서 버에 질의 패킷을 보내는 단계로 돌아가 같은 과정을 반복한다. 클라이언트는 이렇게 ㉣ (알아낸) IP 주소로 사이트를 찾아간다. 네임서버와 클라이언트는 UDP라는 프로토콜에 ㉤ (맞추어) 패 킷을 주고받는다. UDP는 패킷의 빠른 전송 속도를 확보하기 위해 상대에게 패킷을 보내기만 할 뿐 도착 여부는 확인하지 않으며, 특정 질의 패킷에 대해 처음 도착한 응답 패킷을 신뢰 하고 다음에 도착한 패킷은 확인하지 않고 버린다. DNS 스푸 핑은 UDP의 이런 허점들을 이용한다. 이 문제지에 관한 저작권은 한국교육과정평가원에 있습니다. ㉯ (DNS 스푸핑이 이루어지는 과정)을 알아보자. 악성 코드에 감염되어 DNS 스푸핑을 행하는 컴퓨터를 공격자라 한다. 클 라이언트가 네임서버에 특정 IP 주소를 묻는 질의 패킷을 보 낼 때, 공격자에도 패킷이 전달되고 공격자는 위조 사이트의 IP 주소가 적힌 응답 패킷을 클라이언트에 보낸다. 공격자가 보낸 응답 패킷이 네임서버가 보낸 응답 패킷보다 클라이언트 에 먼저 도착하고 클라이언트는 공격자가 보낸 응답 패킷을 옳은 패킷으로 인식하여 위조 사이트로 연결된다.',

				categoryName: '시사',
				type: '뉴스',
				completedAt: new Date(),
				summary: '재미있었다',
				score: 55,
				feedback: '잘 요약했어요',
			},
		],
		chatList: [
			{
				memberId: 1,
				memberName: '오영주',
				memberProfile: '123',
				sendDate: new Date(),
				content: '가나다라마바사가나다라마바사',
			},
			{
				memberId: 2,
				memberName: '박현춘',
				memberProfile: '123',
				sendDate: new Date(),
				content: '라마바사',
			},
			{
				memberId: 2,
				memberName: '박현춘',
				memberProfile: '123',
				sendDate: new Date(),
				content: '라마바사',
			},
			{
				memberId: 2,
				memberName: '박현춘',
				memberProfile: '123',
				sendDate: new Date(),
				content: '라마바사',
			},
			{
				memberId: 2,
				memberName: '박현춘',
				memberProfile: '123',
				sendDate: new Date(),
				content: '라마바사',
			},
			{
				memberId: 2,
				memberName: '박현춘',
				memberProfile: '123',
				sendDate: new Date(),
				content: '라마바사',
			},
			{
				memberId: 2,
				memberName: '박현춘',
				memberProfile: '123',
				sendDate: new Date(),
				content: '라마바사',
			},
			{
				memberId: 2,
				memberName: '박현춘',
				memberProfile: '123',
				sendDate: new Date(),
				content: '라마바사',
			},
			{
				memberId: 1,
				memberName: '오영주',
				memberProfile: '123',
				sendDate: new Date(),
				content: '가나다라마바사가나다라마바사',
			},
		],
	};
return (
	<div className='w-full h-screen flex flex-col items-center overflow-hidden'>
		<Headers />
		<div className='flex flex-col w-3/5 h-full items-start'>
			<GroupHeader myGroup={myGroup} />
			<div className='w-full h-full flex flex-row gap-5 items-start p-5'>
				<Articles myGroup={myGroup} open={open} />
				<Chat myGroup={myGroup} />
			</div>
		</div>

		{isOpen && <MemberDetail close={close} />}
	</div>
);

};
export default Group;
