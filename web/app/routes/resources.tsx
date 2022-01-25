import { Headings, Link, Prose } from '~/components';

export default function () {
  return (
    <Prose>
      <>
        <Headings.Content>Remix Resources</Headings.Content>
        <div className="not-prose">
          <ul className="list-none text-sm text-gray-400 md:flex md:items-center md:gap-4">
            <li className="mb-2 md:mb-auto">💿 &nbsp;officially maintained resource</li>
            <li>💻 &nbsp;community maintained resource</li>
          </ul>
        </div>
        <blockquote className="text-base text-gray-400">
          Have a suggestion? Drop a line to vedovelli@gmail.com 💌
        </blockquote>
        <dl>
          <dt>
            <Headings.Separator>💿 Remix.run website</Headings.Separator>
          </dt>
          <dd>
            This website is awesome 🤩 -{' '}
            <Link.External href="https://remix.run">https://remix.run</Link.External>
          </dd>
        </dl>
        <dl>
          <dt>
            <Headings.Separator>💿 Remix.run documentation</Headings.Separator>
          </dt>
          <dd>
            The official Remix.run documentation -{' '}
            <Link.External href="https://remix.run/docs">https://remix.run/docs</Link.External>
          </dd>
        </dl>
        <dl>
          <dt>
            <Headings.Separator>💿 Remix.run curated examples</Headings.Separator>
          </dt>
          <dd>
            A collection of small examples from the official Remix.run repository. Anyone can
            contribute withe the list, by following the instruction in the README.{' '}
            <Link.External href="https://github.com/remix-run/remix/tree/main/examples">
              https://github.com/remix-run/remix/tree/main/examples
            </Link.External>
          </dd>
        </dl>
        <dl>
          <dt>
            <Headings.Separator>💻 Discord Community</Headings.Separator>
          </dt>
          <dd>
            <Link.External href="https://discord.gg/cAM6EDHJDK">Click here to join</Link.External>
          </dd>
        </dl>
        <dl>
          <dt>
            <Headings.Separator>💻 Remix Guide</Headings.Separator>
          </dt>
          <dd>
            A comprehensive list of learning material related to Remix. Anyone can contribute with
            the list by forking the repository, adding the content and submitting a pull request.{' '}
            <Link.External href="https://remix.guide/">https://remix.guide</Link.External>
          </dd>
        </dl>
        <dl>
          <dt>
            <Headings.Separator>💻 Sergio Xalambrí</Headings.Separator>
          </dt>
          <dd>
            From Argentina he blogs about Remix among other interesting things.{' '}
            <Link.External href="https://sergiodxa.com/">https://sergiodxa.com</Link.External>
          </dd>
        </dl>
        <dl>
          <dt>
            <Headings.Separator>💻 People to follow</Headings.Separator>
          </dt>
          <dd>
            <ul>
              <li>
                <Link.External href="https://twitter.com/remix_run">Remix</Link.External>
              </li>
              <li>
                <Link.External href="https://twitter.com/ryanflorence">Ryan Florence</Link.External>
              </li>
              <li>
                <Link.External href="https://twitter.com/mjackson">Michael Jackson</Link.External>
              </li>
              <li>
                <Link.External href="https://twitter.com/kentcdodds">Kent C. Dodds</Link.External>
              </li>
              <li>
                <Link.External href="https://twitter.com/sergiodxa">Sergio Xalambrí</Link.External>
              </li>
              <li>
                <Link.External href="https://twitter.com/vedovelli74">
                  Fabio Vedovelli
                </Link.External>{' '}
                for Portuguese speakers
              </li>
            </ul>
          </dd>
        </dl>
      </>
    </Prose>
  );
}
