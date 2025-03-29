export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-07-25'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'production',
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  '9cygm0sd',
)

function assertValue(v, errorMessage) {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
