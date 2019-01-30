import summary from '../articles/summary.json'
import Link from 'next/link'

const Top = () => {
	const { fileMap } = summary

	return (
		<div>
			{
				Object.keys(fileMap).map(key => 
					<div key={fileMap[key].sourceBase}>
						<Link href={`/article?id=${fileMap[key].base.replace('.json', '')}`}>
							<a>{fileMap[key].title}</a>
						</Link>
					</div>
				)
			}
		</div>
	)
}

export default Top