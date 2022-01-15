import { Headings, Icon, Icons, Link, Prose } from '~/components';

export default function () {
  return (
    <Prose>
      <>
        <Headings.Content>About</Headings.Content>
        <div>
          <p>
            Created and maintained by{' '}
            <span className="lead text-light-snow-storm3">Fabio Vedovelli</span>
            <br />
            <Link.External href="https://github.com/vedovelli">github.com/vedovelli</Link.External>
          </p>
          <p>
            For content suggestions please drop a line: {` `}
            <span className="lead text-light-snow-storm3">vedovelli@gmail.com</span>
          </p>
        </div>
        <Headings.Separator>Site Stats</Headings.Separator>
        <p>
          Our site stats are public and can be accessed on Plausible.io:{' '}
          <Link.External href={`https://plausible.io/remix-cookbook.com`}>
            {`plausible.io/remix-cookbook.com`}
          </Link.External>
        </p>
        <Headings.Separator>Social Media</Headings.Separator>
        <p className="md:flex md:items-center">
          <Icon icon={Icons.twitter} className="w-6 h-6 mb-2 mr-2 md:mb-auto" />
          Follow us on Twitter:&nbsp;
          <Link.External href="https://twitter.com/RemixCookbook">
            twitter.com/RemixCookbook
          </Link.External>
        </p>
        <p className="md:flex md:items-center">
          <Icon icon={Icons.github} className="w-6 h-6 mb-2 mr-2 md:mb-auto" />
          Github:&nbsp;
          <Link.External href="https://github.com/remix-cookbook">
            github.com/remix-cookbook
          </Link.External>
        </p>
        <Headings.Separator>Special Thanks 🤗</Headings.Separator>
        <p>
          Special thanks to Taisa Soares for the lovely logo!&nbsp;
          <Link.External href="https://twitter.com/gnoma_robotica">
            twitter.com/gnoma_robotica
          </Link.External>
        </p>
      </>
    </Prose>
  );
}
