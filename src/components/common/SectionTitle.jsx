export default function SectionTitle({ title, actionLabel, onAction }) {
  return (
    <div className="sectionHeader">
      <h3 className="sectionTitle">{title}</h3>
      {actionLabel ? (
        <button
          type="button"
          className="sectionAction"
          onClick={onAction}
          style={{ background: 'transparent', border: 0, padding: 0, cursor: 'pointer' }}
        >
          {actionLabel}
        </button>
      ) : null}
    </div>
  )
}

