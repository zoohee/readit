import { Button, Card } from 'flowbite-react';
import Headers from '../../../components/Headers';
import EssayDetailHeader from './EssayDetailHeader';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {articleList} from '../../../types/articleProps';

const TextDetail = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const article = location.state?.article;

	const handleArticle = (article: articleList) => {
		navigate('/viewer', { state: { article } });
	};
	return (
		<>
			<div className='w-full flex justify-center flex-col items-center h-full'>
				<Headers />
				<div className='flex flex-col w-3/5 h-full justify-start  items-center '>
					<EssayDetailHeader />
					<Card className='w-full p-5'>
						<div className='flex flex-col gap-y-5'>
							<div className='flex flex-row justify-between items-center'>
								<div className='text-2xl font-bold'>
									{article.title.length <= 40 ? (
										<div>{article.title} </div>
									) : (
										<div>{article.title.slice(0, 40)}...</div>
									)}
								</div>
								<Button className='bg-green-500 flex items-center gap-2' onClick={() => handleArticle(article)}>
									<span className='material-symbols-outlined'>done</span>
									<span>글 읽으러 가기</span>
								</Button>
							</div>
							<div className='flex flex-row gap-5 items-center justify-end'>
								<div className='flex flex-row gap-1 items-center justify-center'>
									<span className='material-symbols-outlined'>visibility</span>
									<span>{article.hits}</span>
								</div>
								<div>{article.categoryName}</div>
							</div>
							<div className='w-full flex justify-start whitespace-pre-wrap'>
								{article.content.length <= 1355 ? (
									<div className='text-start pt-5'>{article.content} </div>
								) : (
									<div className='text-start pt-5'>{article.content.slice(0, 1355)}...</div>
								)}
							</div>
						</div>
					</Card>
				</div>
			</div>
		</>
	);
};

export default TextDetail;
