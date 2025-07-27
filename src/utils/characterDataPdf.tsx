
import type { CharacterDataType } from "@/types/characterDataType";
import { Page, Text, View, Document, StyleSheet, type DocumentProps, Font } from "@react-pdf/renderer";
import { inputGroups } from "./inputGroups";

Font.register({
    family: "NotoSansJP",
    fonts: [
        {
            src: "../fonts/NotoSansJP-Regular.ttf",
        },
        {
            src: "../fonts/NotoSansJP-Bold.ttf",
            fontWeight: "bold",
        },
    ],
});

const styles = StyleSheet.create({
    page: {
        padding: 30,
        fontSize: 11,
        fontFamily: "NotoSansJP",
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1,
    },
    header: {
        fontSize: 18,
        marginBottom: 20,
        textAlign: "center",
        fontWeight: "bold",
    },
    table: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: 10,
    },
    row: {
        width: "50%",
        padding: 5,
        border: "1pt solid #ccc",
        boxSizing: "border-box",
    },
    label: {
        fontWeight: "bold",
        marginBottom: 2,
    },
    value: {},
});

interface CharacterDataPdfProps {
    characterData: CharacterDataType;
}
export const CharacterDataPdf = (props: CharacterDataPdfProps): React.ReactElement<DocumentProps> => {
    return (
        <Document>
            {inputGroups.map(group => (
                <Page size="A4" style={styles.page} key={group.id}>
                    <Text style={styles.header}>{group.title}</Text>

                    <View style={styles.table}>
                        {group.fields.map((field, index) => (
                            <View style={styles.row} key={index}>
                                <Text style={styles.label}>{field.label}</Text>
                                <Text style={styles.value}>{props.characterData[field.id]}</Text>
                            </View>
                        ))}
                    </View>
                </Page>
            ))}
        </Document>
    );
}