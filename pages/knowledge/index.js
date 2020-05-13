import formatDate from 'date-fns/format'

import Head from '~/components/layout/head'
import Wrapper from '~/components/layout/wrapper'
import { H1, H4, P } from '~/components/text'
import { AvatarGroup } from '~/components/avatar'
import Link from '~/components/text/link'
import Button from '~/components/buttons'
import knowledge from '~/lib/data/knowledge.json'
import { PRODUCT_NAME } from '~/lib/constants'

console.log('KN', knowledge)

const Knowledge = () => (
  <>
    <Head
      titlePrefix=""
      titleSuffix=""
      title={`${PRODUCT_NAME} Knowledge`}
      description={`Learn how to quickly deploy with ${PRODUCT_NAME} in any situation.`}
    />

    <div className="knowledge">
      <div className="knowledge-heading">
        <Wrapper>
          <H1>Knowledge Base</H1>
          <P>
            A collection of knowledge for using the {PRODUCT_NAME} platform.
          </P>

          <div className="actions">
            <span className="caption">Sorted by Newest</span>
            <Link
              href="https://github.com/zeit/docs/issues/new?labels=Section%3A+Guides&template=guide-report-or-request.md"
              underlineOnHover={false}
            >
              <Button secondary small>
                Request an Article
              </Button>
            </Link>
          </div>
        </Wrapper>
      </div>

      <Wrapper>
        <div className="knowledge-list">
          {knowledge.map((k, i) => (
            <Link href={k.url} key={`${k.title}.${i}`}>
              <article className="guide">
                <div className="titles">
                  <H4>{k.title}</H4>
                  <P>{k.description}</P>
                </div>
                <div className="meta">
                  <span className="date">
                    Added on {formatDate(k.published, 'MMMM Do YYYY')}
                  </span>
                  <AvatarGroup
                    size={24}
                    members={k.authors.map(author => {
                      return { username: author }
                    })}
                  />
                </div>
              </article>
            </Link>
          ))}

          <Link href="https://github.com/zeit/docs/blob/master/CONTRIBUTING.md#guides">
            <article className="guide contribute">
              <div className="titles">
                <H4>Write Your Article →</H4>
                <P>
                  Write about using {PRODUCT_NAME} in combination with a
                  technology of your choosing and get featured!
                </P>
              </div>
              <div className="meta">
                <span className="date" />
                <div className="avatar">You</div>
              </div>
            </article>
          </Link>
        </div>
      </Wrapper>
    </div>

    <style jsx>{`
      .titles {
        margin-right: var(--geist-gap);
      }

      .knowledge {
        min-height: 100vh;
        padding-bottom: 64px;
      }

      .knowledge :global(span a) {
        width: 100%;
      }

      .knowledge-heading {
        border-bottom: 1px solid #eaeaea;
        padding-top: 48px;
        padding-bottom: 16px;
      }

      .knowledge-heading :global(h1) {
        margin-bottom: 8px;
      }

      .knowledge-heading :global(p) {
        font-size: 16px;
        margin-top: 8px;
        color: #444444;
      }

      .actions {
        margin-top: 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .actions .caption {
        text-transform: uppercase;
        color: #666;
        font-size: 12px;
        margin-right: 5px;
      }

      .knowledge-list {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding-top: 8px;
      }

      .knowledge-list > :global(*:not(:last-child)) .guide {
        border-bottom: 1px solid #eaeaea;
      }

      .knowledge-list > :global(*:nth-last-child(2)) .guide {
        border-color: transparent;
      }

      .knowledge-list > :global(*:nth-last-child(2)) .guide:after {
        content: '';
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 1px;
        background-image: linear-gradient(to right, transparent 50%, #ddd 50%);
        background-size: 8px 100%;
      }

      .knowledge-list :global(a):hover {
        text-decoration: none;
      }

      .guide {
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 24px 0;
        position: relative;
      }

      .guide :global(h4) {
        margin-top: 0;
        color: #000;
      }

      .guide :global(p) {
        margin-bottom: 0;
        color: #222;
        padding-right: 64px;
      }

      .guide :global(.avatar-group) {
        width: auto;
      }

      .guide:hover :global(h4) {
        text-decoration: underline;
      }

      .guide.contribute {
        margin-top: 24px;
      }

      .guide.contribute :global(h4) {
      }

      .guide.contribute :global(p) {
      }

      .guide.contribute .meta .avatar {
        width: 24px;
        height: 24px;
        background: #000;
        border-radius: 50%;
        text-transform: uppercase;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 8px;
        font-weight: 700;
        color: white;
      }

      .meta {
        display: flex;
        flex: 1 0 auto;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-end;
      }

      .date {
        color: #666;
        font-size: var(--font-size-small);
        line-height: var(--line-height-primary);
      }

      @media (max-width: 768px) {
        .guide {
          flex-direction: column;
        }

        .guide :global(p) {
          padding-right: 0;
        }

        .meta {
          flex-direction: row;
          margin-top: 24px;
        }

        .guide.contribute .meta .avatar {
          display: none;
        }
      }
    `}</style>
  </>
)

export default Knowledge

export const config = {
  amp: 'hybrid'
}
