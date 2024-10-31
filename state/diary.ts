import {defineStore} from 'pinia';

export interface SpecDiaryInfo {
    diary_id: string;
    diary_link: boolean;
}


export interface GradesInfo {
    coff: number;
    grade: number;
    date: string;
}

export interface SubjectsInfo {
    subject_name: string;
    grade: GradesInfo[] | null;
    new_type_grade: number | null;
    old_type_grade: number | null;
}


export interface DiaryInfo {
    quarter_name: string;
    quarter_date: string;
    type_grade: string;
    subjects: SubjectsInfo[] | null;
}

export interface NewGrade {
    grade: number;
    subject: string;
    date: string;
}


export interface ReferralInfo {
    user_id: string;
    invited_by: string;
}


export const useDiaryState = defineStore('diary', {
    state: () => ({
        spec_diary: null as SpecDiaryInfo | null,
        diary_info: null as DiaryInfo[] | null,
        distribution: null as boolean | null,
        referrals: null as ReferralInfo[] | null,
        new_grades: null as NewGrade[] | null,
        is_active: null as boolean | null,
        diary_loaded: false,
        error: null as string | null,
        access_token: null as string | null,
    }),
    actions: {
        async loadAllDiary() {
            try {
                const {data, status, error}: any = await useFetch('https://api.gradeks.xyz/user/me', {
                    method: 'get',
                    headers: {'Authorization': 'Bearer ' + this.access_token},
                });

                if (data.value) {
                    this.diary_loaded = data.value.is_active === true;
                    this.spec_diary = data.value.spec_diary;
                    this.diary_info = data.value.diary_info;
                    this.distribution = data.value.distribution;
                    this.referrals = data.value.referrals;
                    this.is_active = data.value.is_active;
                    this.new_grades = data.value.new_grades;

                } else {
                    console.error(`API error: ${error.statusCode}`)
                    this.error = data?.value?.detail || 'Unknown error occurred';
                }
            } catch (error: any) {
                this.error = error?.message || 'Something went wrong. Please try again later.';
            }
        },
        async activateDistribution() {
            try {
                const {data, status, error}: any = await useFetch('https://api.gradeks.xyz/distribution/activate', {
                    method: 'post',
                    headers: {'Authorization': 'Bearer ' + this.access_token},
                });

                if (data.value) {
                    this.distribution = data.value.distribution_status;

                } else {
                    console.error(`API error: ${error.statusCode}`)
                    this.error = data?.value?.detail || 'Unknown error occurred';
                }
            } catch (error: any) {
                this.error = error?.message || 'Something went wrong. Please try again later.';
            }
        },
        async deactivateDistribution() {
            try {
                const {data, status, error}: any = await useFetch('https://api.gradeks.xyz/distribution/deactivate', {
                    method: 'post',
                    headers: {'Authorization': 'Bearer ' + this.access_token},
                });

                if (data.value) {
                    this.distribution = data.value.distribution_status;

                } else {
                    console.error(`API error: ${error.statusCode}`)
                    this.error = data?.value?.detail || 'Unknown error occurred';
                }
            } catch (error: any) {
                this.error = error?.message || 'Something went wrong. Please try again later.';
            }
        },
        async getNewGrades() {
            try {
                const {data, status, error}: any = await useFetch('https://api.gradeks.xyz/grade/new', {
                    method: 'get',
                    headers: {'Authorization': 'Bearer ' + this.access_token},
                });

                if (data.value) {
                    this.new_grades = data.value;

                } else {
                    console.error(`API error: ${error.statusCode}`)
                    this.error = data?.value?.detail || 'Unknown error occurred';
                }
            } catch (error: any) {
                this.error = error?.message || 'Something went wrong. Please try again later.';
            }
        },
        async newGradeType(grade_type: string) {
            try {
                const { data, status, error }: any = await useFetch(`https://api.gradeks.xyz/grade/change/${grade_type}`, {
                    method: 'post',
                    headers: { 'Authorization': 'Bearer ' + this.access_token },
                });

                if (data.value) {
                    if (this.diary_info) {
                        this.diary_info.forEach(diary => {
                            diary.type_grade = data.value.grade_type;
                        });
                    }
                } else {
                    console.error(`API error: ${error?.statusCode}`);
                    this.error = data?.value?.detail || 'Unknown error occurred';
                }
            } catch (error: any) {
                this.error = error?.message || 'Something went wrong. Please try again later.';
            }
        },
        async connectDiary(diary_id: string) {
            try {
                const { data, status, error }: any = await useFetch(`https://api.gradeks.xyz/user/link`, {
                    method: 'post',
                    headers: { 'Authorization': 'Bearer ' + this.access_token, 'Content-Type': 'application/json' },
                    body: {
                        diary_id: diary_id
                    }
                });
                if (data.value) {
                    this.spec_diary = data.value;
                    return { status: "ok" };
                } else {
                    console.error(`API error: ${error?.statusCode}`);
                    const errorMessage = error?._object[error?._key]?.data?.detail || 'Unknown error occurred';
                    return {status: "error", error: errorMessage};
                }
            } catch (error: any) {
                const errorMessage = error?._object[error?._key]?.data?.detail || 'Something went wrong. Please try again later.';
                return {status: "error", error: errorMessage};
            }
        }
    }
});