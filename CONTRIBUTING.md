# Contributing: add your attendee card

Every attendee gets a card on the site, defined by one markdown file.

## Card fields

| Field     | Required | Description                                      |
| --------- | -------- | ------------------------------------------------ |
| `name`    | yes      | Your display name                                |
| `program` | yes      | Your degree program, e.g. `BS Computer Science`  |
| `bio`     | yes      | A short intro about you                          |
| `github`  | **no**   | GitHub username (no `@`); omit to show initials  |

## Steps

1. **Fork** this repository.
2. In your fork, copy `src/content/cards/example-card.md` to `src/content/cards/<your-github-username>.md`.
3. Edit the frontmatter with your details.
4. Commit your change and open a **pull request** to `msc-nud/msc-devdays`.
5. Once merged, the site redeploys and your card appears.

### No git installed?

On GitHub: fork the repo → open `src/content/cards/` → **Add file → Create new file** → paste the contents of `example-card.md`, edit them, name it `<your-github-username>.md` → **Commit changes** → **Contribute → Open pull request**.

The PR runs a build check; if a required field is missing it will fail with a message telling you which one.
