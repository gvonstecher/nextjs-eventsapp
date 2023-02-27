import Link from 'next/link';
import Image from 'next/image';

export const Header = () => (
    <header>
		<div>
			<div className='topNav'>
				<Image width={100} height={50} src="/images/logo.png" alt="logo"/>
				<nav>
					<ul>
						<li>
							<Link href='/'>Home</Link>
						</li>
						<li>
							<Link href='/events'>Events</Link>
						</li>
						<li>
							<Link href='/about-us'>About Us</Link>
						</li>
					</ul>
				</nav>
			</div>
			<p className='title'>sodfkosdk sodkfosd kfosd</p>
		</div>
	  </header>
)