# Datasets – Version Management

The **Datasets** page lets you manage versioned snapshots of your annotation data for a project. Access it from the sidebar (**Datasets**) while a project is open, or navigate to `/projects/:projectId/datasets`.

Dataset versioning separates **live staging data** (actively being annotated) from **frozen snapshots** (locked versions ready for training or export).

---

## Accessing Dataset Versions

1. Open the **Annotations** module and go to **Projects**.
2. Click a project to open the **Project Dashboard**.
3. Click **Datasets** in the sidebar, or navigate via the project context.

> If no project is selected, clicking **Datasets** in the sidebar prompts you to select a project first.

---

## Page Layout

The page is divided into two panels:

### Left Panel – Version History

A timeline of all dataset versions for the project:

| Version | Description |
|---------|-------------|
| **v0 – Live Staging Data** | Real-time sync of current project images and annotations. Status: **dynamic** (updates as you annotate). |
| **v1, v2, …** | Frozen snapshots created from the live staging pool. Status: **locked** (immutable). |

Each version card shows:

- Version tag (e.g., `v0`, `v1`)
- Version name
- Created date (or "Real-time Sync" for v0)
- Total image count

Click any version to view its details in the right panel.

---

## Live Staging Data (v0)

The **v0** version represents your project's current, in-progress dataset:

- **Status:** Dynamic — counts update in real time as images and annotations are added
- **Volume Metrics:**
  - **Total Images** – All images in the project
  - **Instances** – Total annotation instances across all images
  - **Unannotated Images** – Images without any annotations
- **Pipeline Split:** Unassigned — splits are configured when you freeze a version
- **Class Distribution:** Live bar chart showing instance counts per label

### Freeze Version

When your staging data is ready, click **Freeze Version** to create an immutable snapshot:

1. A **Configure Pipeline Splits** modal opens.
2. Set the train/validation/test split percentages (must total **100%**):
   - **Training Set (%)** – Default: 70%
   - **Validation (%)** – Default: 20%
   - **Test Set (%)** – Default: 10%
3. Click **Confirm & Freeze**.

The system creates a new frozen version (e.g., `v1 – Frozen Snapshot v1`) with the configured splits and locks the current annotation state.

---

## Frozen Versions (v1+)

Frozen versions are read-only snapshots with finalized metrics:

### Volume Metrics

- **Total Images**
- **Instances** (annotation count)
- **Unannotated Images**

### Pipeline Split

A visual bar showing the train/validation/test distribution set during freeze:

- **Train** (blue)
- **Val** (purple)
- **Test** (pink)

### Class Distribution

A scrollable list of all labels with instance counts and relative bar charts.

### Export

Click **Export** on a frozen version to download annotations in your chosen format. See [Export formats](Auto_annotation.md#exporting-annotations) for supported formats.

---

## Role-Based Access

Your role badge is displayed in the page header:

| Role | Access |
|------|--------|
| **Admin** | Full access — freeze versions, export data |
| **Member** | View version history and metrics |
| **Annotator** | View version history and metrics |

Team management requires a **Pro** subscription. See [Upgrade Plan](account_management.md#upgrade-plan).

---

## Navigation

- **Project Name** (uppercase link in header) – Returns to the [Project Dashboard](JobBatch.md)
- **Dataset Versions** title – Current page context

---

## Workflow Summary

1. Annotate images in job batches within your project.
2. Monitor live metrics on the **v0 Live Staging Data** version.
3. When ready, **Freeze Version** with your desired train/val/test splits.
4. **Export** the frozen snapshot for model training or external use.
5. Continue annotating — v0 keeps updating while frozen versions remain locked.
