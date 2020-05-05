import useTranslation from 'next-translate/useTranslation'
import { getI18nProps, withI18n } from '../../../utils/i18n'

export default withI18n(function DatePage({ date }) {
  const { t } = useTranslation()
  return <p>{t('date:todayIs', { date })}.</p>
})

export async function getServerSideProps(ctx) {
  const i18nProps = await getI18nProps(ctx, ['common', 'date'])
  return {
    props: {
      date: new Date().toLocaleString(ctx.params?.lang),
      ...i18nProps,
    },
  }
}
